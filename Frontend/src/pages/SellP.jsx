import React, { useState } from "react";
import axios from "axios";
import { Backendurl } from "../../Private/backend";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const UploadProduct = () => {
    const { isLoggedIn } = useAuth();
    if(!isLoggedIn){
        toast.error("Please Login Before Sell !!");
        return <Navigate to={"/signin"} />
    }
    const {user} = useAuth();
    const [productData, setProductData] = useState({
        item_name: "",
        category: "",
        price: "",
        description: "",
        openToBargain: "Yes",
        quantity: 1,
        image: "",
        user: user._id,
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    // Handle input change
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };

    // Convert image to Base64
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProductData({ ...productData, image: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Submit data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post(`${Backendurl}/api/v1/products/createProduct`, productData, {
                headers: { "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, 
                 }
            });

            setMessage(response.data.message);
            setLoading(false);
        } catch (error) {
            setMessage(error.response?.data?.message || "Error uploading product.");
            setLoading(false);
        }
    };

    return (
      <div className="flex gap-8 p-6 bg-gray-100 rounded-lg shadow-md max-w-6xl mx-auto mb-5">
      {/* Image Upload Section */}
        <div className="flex flex-col items-center justify-center w-1/2 border-2 border-dashed border-gray-400 rounded-lg p-6">
            <label className="cursor-pointer text-gray-500 text-sm">
                Drop files to upload or <span className="text-blue-500">browse</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" required />
            </label>
            {productData.image && <img src={productData.image} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
        </div>
        
        {/* Form Section */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label className="block text-gray-700">Item Name</label>
                    <input type="text" name="item_name" className="w-full border rounded p-2" onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-gray-700">Category</label>
                    <select name="category" className="w-full border rounded p-2" onChange={handleChange} required>
                        <option value="None">None</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Price</label>
                    <input type="number" name="price" className="w-full border rounded p-2" onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-gray-700">Description</label>
                    <textarea name="description" className="w-full border rounded p-2" onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-gray-700">Open to Bargain</label>
                    <select name="openToBargain" className="w-full border rounded p-2" onChange={handleChange}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Quantity</label>
                    <input type="number" name="quantity" className="w-full border rounded p-2" onChange={handleChange} required />
                </div>
                <div className="flex justify-between mt-4">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow" disabled={loading}>
                        {loading ? "Uploading..." : "Upload files"}
                    </button>
                    <button type="button" className="bg-red-500 text-white px-4 py-2 rounded shadow">Cancel</button>
                </div>
            </form>
            {message && <p className="text-green-500 mt-2">{message}</p>}
        </div>
    </div>
    );
};

export default UploadProduct;
