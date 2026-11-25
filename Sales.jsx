
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Sales.css";

import SalesForm from "../Components/SalesForm";
import SalesSummary from "../Components/SalesSummary";
import SalesHistory from "../Components/SalesHistory";

function Sales() {
  const [activePage, setActivePage] = useState('overview');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const renderContent = () => {
    switch (activePage) {

      case 'form':
        return <SalesForm />;

      case 'summary':
        return <SalesSummary />;

      case 'history':
        return <SalesHistory />;

      case 'overview':
      default:
        return (
          <div className="overview-content">
            <h1>Sales Overview</h1>
            <p>Welcome to your KitaWise Sales Management System!</p>

            <div className="overview-cards">

              <div className="overview-card">
                <h3>Sales Form</h3>
                <p>Record and manage your sales transactions.</p>
                <button onClick={() => setActivePage('form')}>
                  Add New Sale
                </button>
              </div>

              <div className="overview-card">
                <h3>Sales Summary</h3>
                <p>View your sales performance and totals.</p>
                <button onClick={() => setActivePage('summary')}>
                  View Summary
                </button>
              </div>

              <div className="overview-card">
                <h3>Sales History</h3>
                <p>Check your previous sales transactions.</p>
                <button onClick={() => setActivePage('history')}>
                  View History
                </button>
              </div>

            </div>
          </div>
        );
    }
  };

  return (
    <div className="sales-layout">

      <aside className="sales-sidebar">

        <div className="sidebar-brand">
          <h2>
            <span className="brand-kita">KITA</span>
            <span className="brand-wise">WISE</span>
          </h2>
          <p>Sales Management</p>
        </div>

        <div className="sidebar-menu">

          <button
            className={activePage === 'overview' ? 'active' : ''}
            onClick={() => setActivePage('overview')}
          >
            ⌂ Sales Overview
          </button>

          <button
            className={activePage === 'form' ? 'active' : ''}
            onClick={() => setActivePage('form')}
          >
            ＋ Sales Form
          </button>

          <button
            className={activePage === 'summary' ? 'active' : ''}
            onClick={() => setActivePage('summary')}
          >
            ▤ Sales Summary
          </button>

          <button
            className={activePage === 'history' ? 'active' : ''}
            onClick={() => setActivePage('history')}
          >
            ◷ Sales History
          </button>

          <button
            onClick={() => navigate('/profit-simulator')}
          >
            ₱ Profit Simulator
          </button>

        </div>

        <div className="sidebar-bottom">
          <button onClick={handleLogout}>
            ↪ Logout
          </button>
        </div>

      </aside>

      <main className="sales-main">

        <header className="sales-header">
          <div>
            <h2>KitaWise</h2>
            <p>Sales and Business Management</p>
          </div>
        </header>

        <section className="sales-content">
          {renderContent()}
        </section>

      </main>

    </div>
  );
}

export default Sales;