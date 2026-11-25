
import React, { useState } from "react";

function PriceComparison() {
  const [products, setProducts] = useState([
    {
      id: 1,
      product: "Rice",
      supplier1: 50,
      supplier2: 48,
      supplier3: 52
    },
    {
      id: 2,
      product: "Sugar",
      supplier1: 75,
      supplier2: 70,
      supplier3: 78
    }
  ]);

  const [newProduct, setNewProduct] = useState({
    product: "",
    supplier1: "",
    supplier2: "",
    supplier3: ""
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  const addProduct = (e) => {
    e.preventDefault();

    if (
      !newProduct.product.trim() ||
      newProduct.supplier1 === "" ||
      newProduct.supplier2 === "" ||
      newProduct.supplier3 === ""
    ) {
      alert("Please complete all fields.");
      return;
    }

    const item = {
      id: Date.now(),
      product: newProduct.product,
      supplier1: Number(newProduct.supplier1),
      supplier2: Number(newProduct.supplier2),
      supplier3: Number(newProduct.supplier3)
    };

    setProducts([...products, item]);

    setNewProduct({
      product: "",
      supplier1: "",
      supplier2: "",
      supplier3: ""
    });
  };

  const getCheapest = (item) => {
    return Math.min(
      item.supplier1,
      item.supplier2,
      item.supplier3
    );
  };

  return (
    <div className="comparison-page">

      <div className="comparison-header">
        <h1>Price Comparison</h1>
        <p>Compare supplier prices and find the best deals.</p>
      </div>

      <div className="comparison-form">
        <h2>Add Product Prices</h2>

        <form onSubmit={addProduct}>
          <input
            type="text"
            name="product"
            placeholder="Product Name"
            value={newProduct.product}
            onChange={handleChange}
          />

          <input
            type="number"
            name="supplier1"
            placeholder="Supplier 1 Price"
            min="0"
            step="0.01"
            value={newProduct.supplier1}
            onChange={handleChange}
          />

          <input
            type="number"
            name="supplier2"
            placeholder="Supplier 2 Price"
            min="0"
            step="0.01"
            value={newProduct.supplier2}
            onChange={handleChange}
          />

          <input
            type="number"
            name="supplier3"
            placeholder="Supplier 3 Price"
            min="0"
            step="0.01"
            value={newProduct.supplier3}
            onChange={handleChange}
          />

          <button type="submit">Add Product</button>
        </form>
      </div>

      <div className="comparison-table">
        <h2>Product Price List</h2>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Supplier 1</th>
              <th>Supplier 2</th>
              <th>Supplier 3</th>
              <th>Lowest Price</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>₱{item.supplier1.toFixed(2)}</td>
                <td>₱{item.supplier2.toFixed(2)}</td>
                <td>₱{item.supplier3.toFixed(2)}</td>
                <td className="lowest-price">
                  ₱{getCheapest(item).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default PriceComparison;