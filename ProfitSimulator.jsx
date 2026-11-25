
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfitSimulator() {

  const [product, setProduct] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  // CALCULATIONS
  const price = Number(sellingPrice) || 0;
  const cost = Number(costPrice) || 0;
  const qty = Number(quantity) || 0;

  const revenue = price * qty;
  const totalCost = cost * qty;
  const profit = revenue - totalCost;

  const margin = revenue > 0
    ? (profit / revenue) * 100
    : 0;

  // MONEY FORMAT
  const formatMoney = (amount) =>
    amount.toLocaleString("en-PH", {
      style: "currency",
      currency: "PHP"
    });

  // RESET FUNCTION
  const handleReset = () => {
    setProduct("");
    setSellingPrice("");
    setCostPrice("");
    setQuantity("");
  };

  // PROFIT STATUS
  const getStatus = () => {
    if (qty <= 0 || price <= 0 || cost <= 0) {
      return "Waiting for product information";
    }

    if (profit > 0) {
      return "Your product is generating a profit!";
    }

    if (profit === 0) {
      return "Your product is at break-even.";
    }

    return "Your product is generating a loss.";
  };

  return (
    <div className="profit-container">

      {/* SIDEBAR */}
      <aside className="profit-sidebar">

        <h2>KITAWISE</h2>

        <p className="profit-menu-label">MAIN MENU</p>

        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/sales">Sales</Link>
          <Link to="/price-comparison">Price Comparison</Link>
          <Link to="/profit-simulator" className="active">
            Profit Simulator
          </Link>
          <Link to="/sales-history">Sales History</Link>
          <Link to="/logout">Logout</Link>
        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="profit-main">

        {/* HEADER */}
        <header className="profit-header">
          <div>
            <h1>Profit Simulator</h1>
            <p>
              Calculate your estimated profit before selling your products.
            </p>
          </div>
        </header>

        {/* CONTENT */}
        <div className="profit-layout">

          {/* INPUT FORM */}
          <section className="profit-form-card">

            <h2>Product Information</h2>

            <p className="profit-description">
              Enter your product details to calculate your estimated profit.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>

              <div className="profit-input-group">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
              </div>

              <div className="profit-input-group">
                <label>Selling Price (₱)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter selling price"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                />
              </div>

              <div className="profit-input-group">
                <label>Cost Price (₱)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter cost price"
                  value={costPrice}
                  onChange={(e) => setCostPrice(e.target.value)}
                />
              </div>

              <div className="profit-input-group">
                <label>Quantity</label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="reset-btn"
                onClick={handleReset}
              >
                Reset Values
              </button>

            </form>

          </section>

          {/* PROFIT SUMMARY */}
          <section className="profit-result-card">

            <h2>Profit Summary</h2>

            <p className="profit-description">
              Your estimated business results.
            </p>

            <div className="result-item">
              <span>Product Name</span>
              <strong>{product || "Not specified"}</strong>
            </div>

            <div className="result-item">
              <span>Quantity</span>
              <strong>{qty}</strong>
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

              <h1 className={profit < 0 ? "negative-profit" : ""}>
                {formatMoney(profit)}
              </h1>

            </div>

            <div className="result-item">
              <span>Profit Margin</span>
              <strong>{margin.toFixed(2)}%</strong>
            </div>

            <div className="profit-message">
              {getStatus()}
            </div>

          </section>

        </div>

        {/* FORMULA GUIDE */}
        <section className="profit-formula">

          <h3>Profit Calculation Guide</h3>

          <div className="formula-item">
            <strong>Revenue</strong>
            <p>Selling Price × Quantity</p>
          </div>

          <div className="formula-item">
            <strong>Total Cost</strong>
            <p>Cost Price × Quantity</p>
          </div>

          <div className="formula-item">
            <strong>Estimated Profit</strong>
            <p>Total Revenue − Total Cost</p>
          </div>

          <div className="formula-item">
            <strong>Profit Margin</strong>
            <p>(Profit ÷ Revenue) × 100</p>
          </div>

        </section>

      </main>

    </div>
  );
}

export default ProfitSimulator;