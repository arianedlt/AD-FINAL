import React, { useState } from "react";
import ProfitCalculation from "../Components/ProfitCalculation";
import ProfitResult from "../Components/ProfitResult";
import "./ProfitSimulator.css";

function ProfitSimulator() {
  const [formData, setFormData] = useState({
    product: "",
    sellingPrice: "",
    costPrice: "",
    quantity: ""
  });

  const price = Number(formData.sellingPrice) || 0;
  const cost = Number(formData.costPrice) || 0;
  const quantity = Number(formData.quantity) || 0;

  const revenue = price * quantity;
  const totalCost = cost * quantity;
  const profit = revenue - totalCost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

  const hasRequiredValues =
    formData.product.trim() !== "" &&
    formData.sellingPrice !== "" &&
    formData.costPrice !== "" &&
    formData.quantity !== "" &&
    quantity > 0;

  const getStatus = () => {
    if (!hasRequiredValues) {
      return "Enter the product, prices, and a quantity above zero.";
    }
    if (profit > 0) return "Your product is generating a profit!";
    if (profit === 0) return "Your product is at break-even.";
    return "Your product is generating a loss.";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      product: "",
      sellingPrice: "",
      costPrice: "",
      quantity: ""
    });
  };

  return (
    <div className="profit-simulator">
      <aside className="profit-sidebar">
        <h2>KITAWISE</h2>
        <p className="profit-menu-label">MAIN MENU</p>
        <nav aria-label="Profit Simulator sections">
          <a className="active" href="#calculator">Calculator</a>
          <a href="#profit-summary">Profit Result</a>
          <a href="#calculation-guide">Calculation Guide</a>
        </nav>
      </aside>

      <main className="profit-main">
        <header className="profit-header">
          <h1>Profit Simulator</h1>
          <p>Calculate your estimated profit before selling your products.</p>
        </header>

        <div className="profit-layout">
          <ProfitCalculation
            product={formData.product}
            sellingPrice={formData.sellingPrice}
            costPrice={formData.costPrice}
            quantity={formData.quantity}
            onChange={handleChange}
            onReset={handleReset}
          />
          <ProfitResult
            product={formData.product}
            quantity={quantity}
            revenue={revenue}
            totalCost={totalCost}
            profit={profit}
            margin={margin}
            status={getStatus()}
          />
        </div>

        <section className="profit-formula" id="calculation-guide">
          <h2>Profit Calculation Guide</h2>
          <div className="formula-item">
            <strong>Revenue</strong>
            <p>Selling Price x Quantity</p>
          </div>
          <div className="formula-item">
            <strong>Total Cost</strong>
            <p>Cost Price x Quantity</p>
          </div>
          <div className="formula-item">
            <strong>Estimated Profit</strong>
            <p>Total Revenue - Total Cost</p>
          </div>
          <div className="formula-item">
            <strong>Profit Margin</strong>
            <p>(Profit / Revenue) x 100</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfitSimulator;
