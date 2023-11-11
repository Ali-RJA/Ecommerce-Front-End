import React, { useState } from "react";

const AddItem = () => {
  const [item, setItem] = useState({
    itemName: "",
    price: "",
    category: "",
    description: "",
    stockQuantity: "",
    images: [], // this will be an array of image file references
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageUpload = (e) => {
    setItem({ ...item, images: [...e.target.files] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = {
        itemName: item.itemName,
        price: item.price,
        category: item.category,
        description: item.description,
        stockQuantity: item.stockQuantity,
        images: item.images.map(image => image.name.replace(/\.[^/.]+$/, ""))
    };


    try {
      const response = await fetch("http://localhost:8080/urban-threads/items/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error!");
      }

      const responseData = await response.json();
      console.log(responseData);
      // Set uploadSuccess to true when the response is successful
      setUploadSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Set uploadSuccess to false in case of an error
      setUploadSuccess(false);
    }
    //TODO: add images to S3 bucket (if needed).
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
