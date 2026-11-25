import React from "react";
import "./ProfitCalculation.css";

function ProfitCalculation({
  product,
  sellingPrice,
  costPrice,
  quantity,
  onChange,
  onReset
}) {
  return (
    <section className="profit-form-card" id="calculator">
      <h2>Product Information</h2>

      <p className="profit-description">
        Enter your product details to calculate your estimated profit.
      </p>

      <form onSubmit={(event) => event.preventDefault()}>
        <div className="profit-input-group">
          <label htmlFor="profit-product">Product Name</label>
          <input
            id="profit-product"
            name="product"
            type="text"
            placeholder="Enter product name"
            value={product}
            onChange={onChange}
          />
        </div>

        <div className="profit-input-group">
          <label htmlFor="profit-selling-price">Selling Price (PHP)</label>
          <input
            id="profit-selling-price"
            name="sellingPrice"
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter selling price"
            value={sellingPrice}
            onChange={onChange}
          />
        </div>

        <div className="profit-input-group">
          <label htmlFor="profit-cost-price">Cost Price (PHP)</label>
          <input
            id="profit-cost-price"
            name="costPrice"
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter cost price"
            value={costPrice}
            onChange={onChange}
          />
        </div>

        <div className="profit-input-group">
          <label htmlFor="profit-quantity">Quantity</label>
          <input
            id="profit-quantity"
            name="quantity"
            type="number"
            min="1"
            step="1"
            placeholder="Enter quantity"
            value={quantity}
            onChange={onChange}
          />
        </div>

        <button
          type="button"
          className="reset-btn"
          onClick={onReset}
        >
          Reset Values
        </button>
      </form>
    </section>
  );
}

export default ProfitCalculation;
