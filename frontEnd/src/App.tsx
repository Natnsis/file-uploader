import { useState } from "react";

const App = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [name, setName] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "No file chosen");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log("File to upload:", file);
      console.log("File to name:", name);

      // Example: You can create a FormData object for API upload
      // const formData = new FormData();
      // formData.append('file', file);
      // fetch('/your-api-endpoint', { method: 'POST', body: formData });
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#F0FFFF] ">
      <div className="bg-[#2D383A] text-white p-15 rounded-lg px-20 flex flex-col gap-5">
        <p className="text-4xl font-pacifico text-center">Image Uploader</p>
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col gap-10 mt-10"
        >
          <div className="flex gap-3 text-xl">
            <p>Name</p>
            <input
              type="text"
              className="bg-[#F0FFFF] text-[#2D383A] border-none rounded-lg px-5"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-lg px-4 py-2 rounded-md bg-[#F0FFFF] text-[#2D383A] mr-5"
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
            <span id="file-name" className="font-outfit text-gray-300">
              {fileName}
            </span>
          </div>
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
