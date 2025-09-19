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

//  const formData = new FormData();
//     formData.append('image', file); // Matches backend's .single('image')

//     try {
//       const response = await fetch('http://localhost:5000/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage(`File uploaded successfully: ${data.file.name}`);
//         setUploadedImageUrl(data.file.url); // Store Cloudinary URL for display
//         setFile(null); // Reset file input
//         setFileName('No file chosen');
//         document.getElementById('file-upload').value = ''; // Clear input
//       } else {
//         setMessage(`Error: ${data.error}`);
//       }
//     } catch (error) {
//       setMessage('Error uploading file. Please try again.');
//       console.error('Upload error:', error);
//     }
