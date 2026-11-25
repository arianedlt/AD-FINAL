
import React from "react";

function SalesSummary({ sales = [] }) {
  const totalRevenue = sales.reduce(
    (total, sale) => total + Number(sale.total || 0),
    0
  );

  const totalTransactions = sales.length;

  const totalItems = sales.reduce(
    (total, sale) => total + Number(sale.quantity || 0),
    0
  );

  const averageSale =
    totalTransactions > 0
      ? totalRevenue / totalTransactions
      : 0;

  const formatMoney = (amount) =>
    `₱${amount.toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;

  return (
    <div className="summary-page">

      <div className="summary-header">
        <div>
          <h1>Sales Summary</h1>
          <p>Monitor your business sales performance.</p>
        </div>

        <span className="summary-label">OVERVIEW</span>
      </div>

      <div className="summary-cards">

        <div className="summary-card revenue-card">
          <div className="summary-icon">₱</div>
          <p>Total Sales Revenue</p>
          <h2>{formatMoney(totalRevenue)}</h2>
          <span>Overall sales income</span>
        </div>

        <div className="summary-card">
          <div className="summary-icon">▤</div>
          <p>Total Transactions</p>
          <h2>{totalTransactions}</h2>
          <span>Recorded sales</span>
        </div>

        <div className="summary-card">
          <div className="summary-icon">□</div>
          <p>Items Sold</p>
          <h2>{totalItems}</h2>
          <span>Total quantity sold</span>
        </div>

        <div className="summary-card">
          <div className="summary-icon">◷</div>
          <p>Average Sale</p>
          <h2>{formatMoney(averageSale)}</h2>
          <span>Average per transaction</span>
        </div>

      </div>

      <div className="summary-details">
        <h3>Sales Performance</h3>
        <p>
          You have recorded <strong>{totalTransactions}</strong> sales
          transaction(s), with a total revenue of{" "}
          <strong>{formatMoney(totalRevenue)}</strong>.
        </p>
      </div>

    </div>
  );
}

export default SalesSummary;