
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import './styles/App.css'; 

// This is the main application component. It manages the state of the product list and renders the ProductList component with the product data.
// The product data is hardcoded in the state for demonstration purposes, but in a real application, it could be fetched from an API or a database.
function App() {
  
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "Experience high-quality sound without the wires.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      description: "Track your fitness and stay connected on the go.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      description: "Portable speaker with powerful sound.",
    },
  ]);

  
  return (
    <div>
      <header className="app-header">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for the latest gadgets!</p>
      </header>
      <div className="app-header">
        <h1>Our Products</h1>
        <ProductList products={products} />
      </div>
    </div> 
  );
}

export default App;