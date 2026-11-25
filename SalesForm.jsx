
import React, { useState } from "react";
import "./SalesForm.css";

function SalesForm({ onAddSale }) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const total = Number(quantity) * Number(price);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !quantity || !price || !date) {
      alert("Please complete all fields.");
      return;
    }

    const newSale = {
      id: Date.now(),
      productName,
      quantity: Number(quantity),
      price: Number(price),
      total,
      date
    };

    if (onAddSale) {
      onAddSale(newSale);
    }

    alert("Sale added successfully!");

    setProductName("");
    setQuantity("");
    setPrice("");
    setDate("");
  };

  return (
    <div className="sales-form-container">
      <div className="sales-form-header">
        <h2>Record New Sale</h2>
        <p>Enter your product sales information below.</p>
      </div>

      <form onSubmit={handleSubmit} className="sales-form">

        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Price per Item (₱)</label>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Sale Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="total-preview">
          <span>Total Sales</span>
          <h2>₱{total.toLocaleString("en-PH", {
            minimumFractionDigits: 2
          })}</h2>
        </div>

        <button type="submit" className="save-sale-btn">
          Save Sale
        </button>

      </form>
    </div>
  );
}

export default SalesForm;