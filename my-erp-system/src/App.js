// App.js

// App.js

import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import ProductsManagement from "./components/ProductsManagement";
import OrdersManagement from "./components/OrdersManagement";
import OrdersCalendarView from "./components/OrdersCalendarView";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <ProductsManagement />;
      case "orders":
        return <OrdersManagement />;
      case "calender":
        return <OrdersCalendarView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <header>
        <h1> MY ERP SYSTEM </h1>
        <nav>
          <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
          <button onClick={() => setCurrentPage("products")}>Products</button>
          <button onClick={() => setCurrentPage("orders")}>Orders</button>
          <button onClick={() => setCurrentPage("calender")}>Calender</button>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
