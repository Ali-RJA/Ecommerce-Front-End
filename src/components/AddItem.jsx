import React, { useState } from "react";

const AddItem = () => {
  const [item, setItem] = useState({
    itemName: "",
    price: "",
    category: "",
    description: "",
    stockQuantity: ""
    });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileMap, setFileMap] = useState(new Map()); // [fileName, file
  const handleImageUpload = (e) => {
    const newFileMap = new Map();
    const filesArray = Array.from(e.target.files);
  
    filesArray.forEach(file => {
      // Use 'file', not 'image'
      newFileMap.set(file.name.replace(/\.[^/.]+$/, ""), file);
    });
  
    setFileMap(newFileMap);
  
    
  };
  const uploadFileToS3 = async (file, presignedUrl) => {
    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      });
  
      if (response.status === 200) {
        console.log('File uploaded successfully');
        return true;
      } else {
        console.error('File upload failed:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error uploading file to S3:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imagesMap = new Map();
    fileMap.forEach((fileName, file) => {
      imagesMap.set(file, "");
    });
    const itemData = {
        itemName: item.itemName,
        price: item.price,
        category: item.category,
        description: item.description,
        stockQuantity: item.stockQuantity,
        images: Object.fromEntries(imagesMap)
    };
    console.log(itemData);

    try {
      const response = await fetch("http://localhost:8080/urban-threads/items/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData),
      });
      console.log(JSON.stringify(itemData));

      if (!response.ok) {
        throw new Error("Server responded with an error!");
      }

      const responseData = await response.json();
      console.log(responseData);
      Object.entries(responseData.images).forEach(([key, value]) => {
        const file = fileMap.get(key);
        const success = uploadFileToS3(file, value);
        if (success) {
          setUploadSuccess(true);
        }
        else {
          setUploadSuccess(false);
        }

      });

    } catch (error) {
      console.error("Error submitting form:", error);
    }


  };

  return (
    <div>
      <div>
        {uploadSuccess && (
          <div className="success-message">Item uploaded successfully!</div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item.itemName}
          onChange={(e) => setItem({ ...item, itemName: e.target.value })}
          placeholder="Item Name"
        />
        <input
          type="text"
          value={item.price}
          onChange={(e) => setItem({ ...item, price: e.target.value })}
          placeholder="Price"
        />
        <input
          type="text"
          value={item.category}
          onChange={(e) => setItem({ ...item, category: e.target.value })}
          placeholder="Category"
        />
        <textarea
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          placeholder="Description"
        />
        <input
          type="number"
          value={item.stockQuantity}
          onChange={(e) => setItem({ ...item, stockQuantity: e.target.value })}
          placeholder="Stock Quantity"
        />
        <input type="file" onChange={handleImageUpload} multiple />
        <button type="submit">Upload Item</button>
      </form>
    </div>
  );
};

export default AddItem;
