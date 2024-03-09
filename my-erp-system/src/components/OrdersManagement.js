// components/OrdersManagement.js
import React, { useState } from "react";

function OrdersManagement() {
  // Mock data for orders (you can replace it with actual data from an API)
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "Saniya Maner",
      orderDate: "2024-03-08",
      status: "Pending",
      details: "Product added put payment is not done..!",
    },
    {
      id: 2,
      customerName: "Asif Maner",
      orderDate: "2024-03-09",
      status: "Completed",
      details: "Product added and payment also done.",
    },
    {
      id: 3,
      customerName: "Sangam Bhosale",
      orderDate: "2024-03-07",
      status: "Incompleted",
      details: "Product not added in bucket ",
    },
    {
      id: 4,
      customerName: "Sumit Admane",
      orderDate: "2024-03-06",
      status: "Completed",
      details: "Product added and payment also done.",
    },
    // Add more orders here
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to delete an order
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  // Function to update the status of an order
  const updateOrderStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  // Function to handle viewing order details
  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  // Function to close the order details modal
  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div>
      <h2>Orders Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button
                  onClick={() => updateOrderStatus(order.id, "Completed")}
                >
                  Mark as Completed
                </button>
                <button onClick={() => deleteOrder(order.id)}>Delete</button>
                <button onClick={() => viewOrderDetails(order)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeOrderDetails}>
              &times;
            </span>
            <h2>Order Details</h2>
            <p>{selectedOrder.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersManagement;
