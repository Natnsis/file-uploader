import { useState } from "react";

const Copy = () => {
  const [fileName, setFileName] = useState("select an image");
  const [file, setFile] = useState(null);

  const applyImage = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setFile(selectedImage);
      setFileName(selectedImage.name);
    }
  };

  console.log(file);
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="uploading-image" className="mr-10">
            choose an image
          </label>
          <input
            type="file"
            className="hidden"
            id="uploading-image"
            onChange={applyImage}
            accept="image/*"
          />
          <span>{fileName}</span>
        </div>
        <div>
          <button>upload</button>
        </div>
      </form>
    </div>
  );
};

export default Copy;
