
import React, { useState } from "react";
import "./SalesHistory.css";

function SalesHistory({ sales = [], onDeleteSale }) {

  const [search, setSearch] = useState("");

  const filteredSales = sales.filter((sale) =>
    String(sale.product || "").toLowerCase().includes(search.toLowerCase())
  );

  const totalSales = sales.reduce(
    (sum, sale) => sum + sale.total, 0
  );

  const deleteSale = (id) => {
    if (onDeleteSale) {
      onDeleteSale(id);
    }
  };

  return (
    <div className="history-page">

      <div className="history-header">
        <div>
          <h1>Sales History</h1>
          <p>View and manage your previous sales transactions.</p>
        </div>
      </div>

      <div className="history-summary">

        <div className="summary-card">
          <h3>Sales Entries</h3>
          <h2>{sales.length}</h2>
          <p>Recorded sales</p>
        </div>

        <div className="summary-card">
          <h3>Total Sales</h3>
          <h2>₱{totalSales.toLocaleString()}</h2>
          <p>Overall sales amount</p>
        </div>

        <div className="summary-card">
          <h3>Products Sold</h3>
          <h2>
            {sales.reduce((sum, sale) => sum + sale.quantity, 0)}
          </h2>
          <p>Total quantity sold</p>
        </div>

      </div>

      <div className="history-content">

        <div className="history-tools">
          <h2>Sales Records</h2>

          <input
            type="text"
            placeholder="Search product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="history-table-container">

          <table className="history-table">

            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Amount</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredSales.map((sale) => (
                <tr key={sale.id}>
                  <td>{sale.product}</td>
                  <td>{sale.quantity}</td>
                  <td>₱{sale.price}</td>
                  <td className="sale-total">
                    ₱{sale.total.toLocaleString()}
                  </td>
                  <td>{sale.date}</td>
                  <td>
                    <button
                      className="delete-history-btn"
                      onClick={() => deleteSale(sale.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredSales.length === 0 && (
                <tr>
                  <td colSpan="6" className="no-records">
                    No sales records found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default SalesHistory;
