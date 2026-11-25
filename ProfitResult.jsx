import React from "react";
import "./ProfitResult.css";

function ProfitResult({ product, quantity, revenue, totalCost, profit, margin, status }) {
  const formatMoney = (amount) =>
    amount.toLocaleString("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  return (
    <section className="profit-result-card" id="profit-summary">
      <h2>Profit Result</h2>
      <p className="profit-description">Your estimated business results.</p>
      <div className="result-item">
        <span>Product Name</span>
        <strong>{product.trim() || "Not specified"}</strong>
      </div>
      <div className="result-item">
        <span>Quantity</span>
        <strong>{quantity || 0}</strong>
      </div>
      <div className="result-item">
        <span>Total Revenue</span>
        <strong>{formatMoney(revenue)}</strong>
      </div>
      <div className="result-item">
        <span>Total Cost</span>
        <strong>{formatMoney(totalCost)}</strong>
      </div>
      <div className="profit-highlight">
        <p>Estimated Profit</p>
        <h3 className={profit < 0 ? "negative-profit" : ""}>
          {formatMoney(profit)}
        </h3>
      </div>
      <div className="result-item">
        <span>Profit Margin</span>
        <strong>{margin.toFixed(2)}%</strong>
      </div>
      <div className="profit-message" role="status">{status}</div>
    </section>
  );
}

export default ProfitResult;
