import React, { useState } from 'react';

const AddMedicine = () => {
  const [formData, setFormData] = useState({
    name: '',
    details: [{ quantity: '', expiryDate: '', manufacturer: '' }]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedDetails = formData.details.map((detail, i) => 
      i === index ? { ...detail, [name]: value } : detail
    );
    setFormData((prevData) => ({
      ...prevData,
      details: updatedDetails
    }));
  };

  const handleAddDetail = () => {
    setFormData((prevData) => ({
      ...prevData,
      details: [...prevData.details, { quantity: '', expiryDate: '', manufacturer: '' }]
    }));
  };

  const handleRemoveDetail = (index) => {
    const updatedDetails = formData.details.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      details: updatedDetails
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Add New Medicine</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {formData.details.map((detail, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`quantity-${index}`}>
                Quantity
              </label>
              <input
                type="number"
                id={`quantity-${index}`}
                name="quantity"
                value={detail.quantity}
                onChange={(e) => handleChange(e, index)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`expiryDate-${index}`}>
                Expiry Date
              </label>
              <input
                type="date"
                id={`expiryDate-${index}`}
                name="expiryDate"
                value={detail.expiryDate}
                onChange={(e) => handleChange(e, index)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`manufacturer-${index}`}>
                Manufacturer
              </label>
              <input
                type="text"
                id={`manufacturer-${index}`}
                name="manufacturer"
                value={detail.manufacturer}
                onChange={(e) => handleChange(e, index)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="button"
              onClick={() => handleRemoveDetail(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddDetail}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Add Another Detail
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Medicine
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;