// components/ProductsManagement.js
import React, { useState } from "react";

function ProductsManagement() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      category: "Category A",
      price: 10.99,
      stockQuantity: 100,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category B",
      price: 20.99,
      stockQuantity: 120,
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category C",
      price: 9.99,
      stockQuantity: 200,
    },
    {
      id: 4,
      name: "Product 4",
      category: "Category D",
      price: 15.99,
      stockQuantity: 150,
    },
    // Add more products here
  ]);

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    stockQuantity: "",
  });
  const [editProduct, setEditProduct] = useState(null);

  // Function to delete a product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Function to handle form submission for adding or updating a product
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editProduct) {
      // Update existing product
      const updatedProducts = products.map((product) =>
        product.id === editProduct.id ? editProduct : product
      );
      setProducts(updatedProducts);
      setEditProduct(null);
    } else {
      // Add new product
      setProducts([...products, newProduct]);
      setNewProduct({
        id: "",
        name: "",
        category: "",
        price: "",
        stockQuantity: "",
      });
    }
  };

  // Function to handle input change for adding or updating a product
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Function to populate form fields for editing a product
  const handleEdit = (product) => {
    setEditProduct(product);
    setNewProduct(product);
  };

  return (
    <div>
      <h2>Products Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="stockQuantity"
          value={newProduct.stockQuantity}
          onChange={handleChange}
          placeholder="Stock Quantity"
          required
        />
        <button type="submit">
          {editProduct ? "Update Product" : "Add Product"}
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsManagement;
