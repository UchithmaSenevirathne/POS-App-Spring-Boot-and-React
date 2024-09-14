// import React, { useState, useEffect } from "react";
// import { HiOutlineX } from "react-icons/hi";
// import axios from "axios";

// const API_URL = "http://localhost:8080/backend/item";

// function Items() {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({
//     imageSource: "file", // Can be 'file' or 'url'
//     imgFile: null,
//     imgUrl: "",
//     name: "",
//     unitPrice: "",
//     qty: "",
//   });
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm((prevForm) => ({
//         ...prevForm,
//         imgFile: file,
//         imgUrl: "",
//       }));
//     }
//   };

//   const handleImageTypeChange = (type) => {
//     setForm((prevForm) => ({
//       ...prevForm,
//       imageSource: type,
//       imgFile: type === "file" ? prevForm.imgFile : null,
//       imgUrl: type === "url" ? prevForm.imgUrl : "",
//     }));
//   };

//   const removeImage = () => {
//     setForm((prevForm) => ({
//       ...prevForm,
//       imgFile: null,
//       imgUrl: "",
//     }));
//   };

//   const handleSubmit =  (e) => {
//     e.preventDefault();
//     const newItem = {
//       ...form,
//       imgUrl: form.imgFile ? URL.createObjectURL(form.imgFile) : form.imgUrl,
//     };

//     if (editingIndex === null) {
//       // Add new item
//       setItems([...items, newItem]);
//     } else {
//       // Update existing item
//       const updatedItems = items.map((item, index) =>
//         index === editingIndex ? newItem : item
//       );
//       setItems(updatedItems);
//       setEditingIndex(null);
//     }

//     // Reset the form
//     setForm({
//       imageSource: "file",
//       imgFile: null,
//       imgUrl: "",
//       name: "",
//       unitPrice: "",
//       qty: "",
//     });

//   };

//   const handleEdit = (index) => {
//     const item = items[index];
//     setForm({
//       imageSource: item.imgFile ? "file" : "url",
//       imgFile: item.imgFile || null,
//       imgUrl: item.imgUrl || "",
//       name: item.name,
//       unitPrice: item.unitPrice,
//       qty: item.qty,
//     });
//   };

//   const handleDelete = async (index) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="flex gap-10 mr-10">
//       {/* Item List Table */}
//       <div className="container">
//         <div className="py-4">
//           <table className="table w-full bg-white border">
//             <thead>
//               <tr className="bg-[orange] text-white">
//                 <th scope="col">ID</th>
//                 <th scope="col">Item Image</th>
//                 <th scope="col">Item Name</th>
//                 <th scope="col">Unit Price</th>
//                 <th scope="col">Item Quantity</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row" className="text-blue-400">#{index + 1}</th>
//                   <td>
//                     {item.imgUrl && (
//                       <img src={item.imgUrl} alt="Item" width="50" />
//                     )}
//                   </td>
//                   <td className="text-black">{item.name}</td>
//                   <td className="text-black">{item.unitPrice}</td>
//                   <td className="text-black">{item.qty}</td>
//                   <td>
//                     <button
//                       className="px-3 py-2 mx-2 text-green-700 border border-green-700 rounded-md green-700"
//                       onClick={() => handleEdit(index)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="mx-2 btn bg-[red] py-2 px-3 text-white rounded-md"
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Form for Adding or Editing Items */}
//       <div className="container w-2/5">
//         <div className="row">
//           <div className="p-4 mt-2 bg-white border rounded-md col-md-6 offset-md-3">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//               {/* Image Selection Toggle */}
//               <div className="flex gap-5 mb-3">
//                 {/* <label className="font-semibold">Image:</label> */}
//                 <div className="flex gap-3">
//                   <button
//                     type="button"
//                     className={`btn text-[15px] ${
//                       form.imageSource === "file"
//                         ? " text-[orange]"
//                         : "text-[#979797]"
//                     }`}
//                     onClick={() => handleImageTypeChange("file")}
//                   >
//                     Choose File
//                   </button>
//                   <button
//                     type="button"
//                     className={`btn text-[15px] ${
//                       form.imageSource === "url"
//                         ? " text-[orange]"
//                         : "text-[#979797]"
//                     }`}
//                     onClick={() => handleImageTypeChange("url")}
//                   >
//                     Image URL
//                   </button>
//                 </div>
//               </div>

//               {/* Conditional Rendering of Image URL or File Input */}
//               {form.imageSource === "file" ? (
//                 <div className="flex items-center gap-5 mb-3">
//                   {/* Hidden file input */}
//                   <input
//                     type="file"
//                     id="fileInput"
//                     className="hidden"
//                     name="imgFile"
//                     onChange={handleFileChange}
//                     accept="image/*"
//                   />

//                   {/* Custom button that triggers the hidden file input */}
//                   <button
//                     type="button"
//                     className="px-4 py-2 hover:text-white rounded hover:bg-[orange] text-[orange] bg-white border-[orange] border transition-all duration-500"
//                     onClick={() => document.getElementById("fileInput").click()}
//                   >
//                     Choose File
//                   </button>

//                   {/* Display the selected file name if a file is chosen */}
//                   {form.imgFile && (
//                     <span className="ml-2">{form.imgFile.name}</span>
//                   )}
//                 </div>
//               ) : (
//                 <div className="flex gap-5 mb-3">
//                   <input
//                     type="text"
//                     className="flex-1 h-10 px-5 border rounded-md form-control"
//                     placeholder="Enter image URL"
//                     name="imgUrl"
//                     value={form.imgUrl}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               )}

//               {/* Image Preview and Remove Button */}
//               {(form.imgUrl || form.imgFile) && (
//                 <div className="flex justify-center mb-3 ">
//                   <img
//                     src={
//                       form.imgFile
//                         ? URL.createObjectURL(form.imgFile)
//                         : form.imgUrl
//                     }
//                     alt="Selected Item"
//                     width="200"
//                     className="rounded-lg"
//                   />
//                   <HiOutlineX
//                     type="button"
//                     className="btn btn-sm ms-2 text-[#979797]"
//                     onClick={removeImage}
//                   >
//                     Remove Image
//                   </HiOutlineX>
//                 </div>
//               )}

//               {/* Item Details Input Fields */}
//               <div className="flex gap-5 mb-3">
//                 <label htmlFor="name" className="font-semibold form-label">
//                   Item Name :
//                 </label>
//                 <input
//                   type="text"
//                   className="flex-1 h-10 px-5 border rounded-md form-control"
//                   placeholder="Enter item name"
//                   name="name"
//                   value={form.name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex gap-5 mb-3">
//                 <label htmlFor="unitPrice" className="pr-2 font-semibold form-label">
//                   Unit Price :
//                 </label>
//                 <input
//                   type="text"
//                   className="flex-1 h-10 px-5 border rounded-md form-control"
//                   placeholder="Enter unit price"
//                   name="unitPrice"
//                   value={form.unitPrice}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex gap-5 mb-3">
//                 <label htmlFor="qty" className="pr-4 font-semibold form-label">
//                   Quantity :
//                 </label>
//                 <input
//                   type="text"
//                   className="flex-1 h-10 px-5 border rounded-md form-control"
//                   placeholder="Enter quantity"
//                   name="qty"
//                   value={form.qty}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               {/* Submit and Cancel Buttons */}
//               <div className="flex gap-5 mt-5">
//                 <button type="submit" className="btn bg-[orange] py-2 px-3 rounded-md text-white w-36">
//                   {editingIndex === null ? "Add Item" : "Update Item"}
//                 </button>
//                 <button
//                   type="button"
//                   className="mx-2 btn border-[orange] border rounded-md py-2 px-3 text-[orange]"
//                   onClick={() => {
//                     setForm({
//                       imageSource: "file",
//                       imgFile: null,
//                       imgUrl: "",
//                       name: "",
//                       unitPrice: "",
//                       qty: "",
//                     });
//                     setEditingIndex(null);
//                   }}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Items;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiOutlineX } from "react-icons/hi";

const API_URL = "http://localhost:8080/backend/item"; // Update with your API URL

function Items() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    imageSource: "file",
    imgFile: null,
    imgUrl: "",
    name: "",
    unitPrice: "",
    qty: "",
    category: "",  // Initialize category field
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    // Fetch all items when the component mounts
    fetchCategories();
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/backend/category');
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prevForm) => ({
        ...prevForm,
        imgFile: file,
        imgUrl: "",
      }));
    }
  };

  const handleImageTypeChange = (type) => {
    setForm((prevForm) => ({
      ...prevForm,
      imageSource: type,
      imgFile: type === "file" ? prevForm.imgFile : null,
      imgUrl: type === "url" ? prevForm.imgUrl : "",
    }));
  };

  const removeImage = () => {
    setForm((prevForm) => ({
      ...prevForm,
      imgFile: null,
      imgUrl: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("itemName", form.name);
    formData.append("unitPrice", form.unitPrice);
    formData.append("itemQty", form.qty);
    formData.append("categoryId", form.category);
    if (form.imgFile) {
      formData.append("itemImage", form.imgFile);
    } else {
      formData.append("itemImage", form.imgUrl);
    }

    try {
      if (editingIndex === null) {
        // Add new item
        await axios.post(API_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        // Update existing item
        const id = items[editingIndex].itemId;
        await axios.put(`${API_URL}/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      // Reset the form and fetch updated items
      setForm({
        imageSource: "file",
        imgFile: null,
        imgUrl: "",
        name: "",
        unitPrice: "",
        qty: "",
        category: "", // Reset category
      });
      setEditingIndex(null);
      fetchItems(); // Ensure this function is called
    } catch (error) {
      console.error("Error saving item", error);
    }
  };

  const handleEdit = (index) => {
    const item = items[index];
    setForm({
      imageSource: item.itemImage ? "url" : "file",
      imgFile: null,
      imgUrl: item.itemImage || "",
      name: item.itemName,
      unitPrice: item.itemPrice,
      qty: item.itemQuantity,
    });
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    const id = items[index].itemId;
    console.log(id);
    try {
      await axios.delete(`${API_URL}/${id}`);
      setItems(items.filter((_, i) => i !== index)); // Update state
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  return (
    <div className="flex gap-10 mr-10">
      {/* Item List Table */}
      <div className="container">
        <div className="py-4">
          <table className="table w-full bg-white border">
            <thead>
              <tr className="bg-[orange] text-white">
                <th scope="col">ID</th>
                <th scope="col">Item Image</th>
                <th scope="col">Item Name</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Item Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.itemId}>
                  <th scope="row" className="text-blue-400">
                    {item.itemId}
                  </th>
                  <td>
                    {item.itemImage && (
                      <img
                        src={`data:image/jpeg;base64,${item.itemImage}`}
                        alt="Item"
                        width="50"
                      />
                    )}
                  </td>
                  <td>{item.itemName}</td>
                  <td>{item.itemPrice}</td>
                  <td>{item.itemQuantity}</td>
                  <td>
                    <button
                      className="px-3 py-2 mx-2 text-green-700 border border-green-700 rounded-md green-700"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="mx-2 btn bg-[red] py-2 px-3 text-white rounded-md"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form for Adding or Editing Items */}
      <div className="container w-2/5">
        <div className="row">
          <div className="p-4 mt-2 bg-white border rounded-md col-md-6 offset-md-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Image Selection Toggle */}
              <div className="flex gap-5 mb-3">
                <div className="flex gap-3">
                  <button
                    type="button"
                    className={`btn text-[15px] ${
                      form.imageSource === "file"
                        ? " text-[orange]"
                        : "text-[#979797]"
                    }`}
                    onClick={() => handleImageTypeChange("file")}
                  >
                    Choose File
                  </button>
                  <button
                    type="button"
                    className={`btn text-[15px] ${
                      form.imageSource === "url"
                        ? " text-[orange]"
                        : "text-[#979797]"
                    }`}
                    onClick={() => handleImageTypeChange("url")}
                  >
                    Image URL
                  </button>
                </div>
              </div>

              {/* Conditional Rendering of Image URL or File Input */}
              {form.imageSource === "file" ? (
                <div className="flex items-center gap-5 mb-3">
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    name="imgFile"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 hover:text-white rounded hover:bg-[orange] text-[orange] bg-white border-[orange] border transition-all duration-500"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    Choose File
                  </button>
                  {form.imgFile && (
                    <span className="ml-2">{form.imgFile.name}</span>
                  )}
                </div>
              ) : (
                <div className="flex gap-5 mb-3">
                  <input
                    type="text"
                    className="flex-1 h-10 px-5 border rounded-md form-control"
                    placeholder="Enter image URL"
                    name="imgUrl"
                    value={form.imgUrl}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {/* Image Preview and Remove Button */}
              {(form.imgUrl || form.imgFile) && (
                <div className="flex justify-center mb-3 ">
                  <img
                    src={
                      form.imgFile
                        ? URL.createObjectURL(form.imgFile)
                        : form.imgUrl
                    }
                    alt="Selected Item"
                    width="200"
                    className="rounded-lg"
                  />
                  <HiOutlineX
                    type="button"
                    className="btn btn-sm ms-2 text-[#979797]"
                    onClick={removeImage}
                  >
                    Remove Image
                  </HiOutlineX>
                </div>
              )}

              {/* Form Inputs */}
              <input
                type="text"
                className="h-10 px-5 border rounded-md form-control"
                placeholder="Item Name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
              />
              <input
                type="number"
                className="h-10 px-5 border rounded-md form-control"
                placeholder="Unit Price"
                name="unitPrice"
                value={form.unitPrice}
                onChange={handleInputChange}
              />
              <input
                type="number"
                className="h-10 px-5 border rounded-md form-control"
                placeholder="Quantity"
                name="qty"
                value={form.qty}
                onChange={handleInputChange}
              />
              {/* Category dropdown */}
              <select
                name="category"
                value={form.category || ""}
                onChange={handleInputChange}
                className="h-10 px-5 border rounded-md form-control text-[#999999]"
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories.map((category) => (
                  <option key={category.cat_id} value={category.cat_id}>
                    {category.cat_name}
                  </option>
                ))}
              </select>
              <div className="flex">
                <button
                  type="submit"
                  className="py-2 px-4 text-white bg-[orange] rounded-md"
                >
                  {editingIndex === null ? "Add Item" : "Update Item"}
                </button>
                <button
                  type="button"
                  className="mx-2 btn border-[orange] border rounded-md py-2 px-3 text-[orange]"
                  onClick={() => {
                    setForm({
                      imageSource: "file",
                      imgFile: null,
                      imgUrl: "",
                      name: "",
                      unitPrice: "",
                      qty: "",
                    });
                    setEditingIndex(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
