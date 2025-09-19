import axios from "axios";
import { useState } from "react";

const App = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [name, setName] = useState("");
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "No file chosen");

    // Show preview before upload
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // "image" must match multer's field name
    formData.append("name", name);

    try {
      const response = await axios.post(
        "http://localhost:4000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Upload successful!");
      console.log(response.data);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed! Check console for details.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#F0FFFF]">
      <div className="bg-[#2D383A] text-white p-10 rounded-lg px-20 flex flex-col gap-5">
        <p className="text-4xl font-pacifico text-center">Image Uploader</p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col gap-10 mt-10"
        >
          {/* Name input */}
          <div className="flex gap-3 text-xl">
            <p>Name</p>
            <input
              type="text"
              className="bg-[#F0FFFF] text-[#2D383A] border-none rounded-lg px-5"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          {/* File input */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-lg px-4 py-2 rounded-md bg-[#F0FFFF] text-[#2D383A] mb-2 hover:bg-[#E0F0F0] transition-colors"
            >
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <span className="font-outfit text-gray-300">{fileName}</span>
          </div>

          {/* Preview image */}
          {preview && (
            <div className="mt-4">
              <p className="text-center text-sm text-gray-400 mb-2">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-md border border-gray-300"
              />
            </div>
          )}

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="bg-[#F0FFFF] text-[#2D383A] text-lg px-4 py-2 rounded-md hover:bg-[#E0F0F0] transition-colors"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
