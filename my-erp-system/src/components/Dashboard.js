import React, { useState } from "react";
import ProductsManagement from "./ProductsManagement";
import OrdersManagement from "./OrdersManagement";
import OrdersCalendarView from "./OrdersCalendarView";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardContent />;
      case "products":
        return <ProductsManagement />;
      case "orders":
        return <OrdersManagement />;
      case "calendar":
        return <OrdersCalendarView />;
      default:
        return <DashboardContent />;
    }
  };

  const DashboardContent = () => {
    return (
      <div>
        <h2>Dashboard</h2>
        <div>
          <h3>Product Summary:</h3>
          <ul>
            <li>Total number of products: 600</li>
            <li>Total number of orders: 70</li>
            <li>Revenue for the month: Rs 10,000</li>
            <li>Number of pending orders: 10</li>
          </ul>
        </div>
        <div>
          <h3>Quick Navigation:</h3>
          <ul>
            <li>
              <button onClick={() => setCurrentPage("products")}>
                Products
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage("orders")}>Orders</button>
            </li>
            {/* Add more quick navigation links/buttons here */}
            <li>
              <button onClick={() => setCurrentPage("calendar")}>
                Calendar
              </button>
            </li>
            {/* Add more quick navigation links/buttons here */}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="Dashboard">
      <nav>
        <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
        <button onClick={() => setCurrentPage("products")}>Products</button>
        <button onClick={() => setCurrentPage("orders")}>Orders</button>
        <button onClick={() => setCurrentPage("calendar")}>Calendar</button>
      </nav>

      <main>{renderPage()}</main>
    </div>
  );
}

export default Dashboard;
