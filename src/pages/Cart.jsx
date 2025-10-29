import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [tableSlug, setTableSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  // Fetch orders from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle order placement
  const handlePlaceOrder = async () => {
    if (!tableSlug.trim()) {
      alert("Please enter Table Slug!");
      return;
    }
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/orders", {
        tableSlug,
        items: cartItems,
      });
      alert("Order placed successfully!");
      setCartItems([]);
      setOrders((prev) => [...prev, res.data]);
    } catch (err) {
      console.error(err);
      alert("Failed to place order!");
    } finally {
      setLoading(false);
    }
  };

  // Add dummy items to cart (for testing)
  const addDummyItem = () => {
    const newItem = {
      menuItemId: Math.random().toString(36).substring(2, 7),
      name: "Masala Dosa",
      price: 120,
      qty: 1,
    };
    setCartItems((prev) => [...prev, newItem]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fc",
        padding: "2rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          textAlign: "center",
          color: "#333",
        }}
      >
        🛒 Your Cart
      </h1>

      {/* Cart Section */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "1.5rem",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          marginBottom: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: "600",
            color: "#222",
            marginBottom: "1rem",
          }}
        >
          Your Cart Items
        </h2>

        {cartItems.length === 0 ? (
          <p style={{ color: "#777", textAlign: "center" }}>Cart is empty 🛍️</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f9fafb",
                  border: "1px solid #ddd",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  marginBottom: "8px",
                }}
              >
                <span>
                  <strong>{item.name}</strong> × {item.qty}
                </span>
                <span
                  style={{
                    fontWeight: "600",
                    color: "#27ae60",
                  }}
                >
                  ₹{item.price * item.qty}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Enter Table Slug"
            style={{
              border: "1px solid #ccc",
              padding: "10px 14px",
              borderRadius: "8px",
              width: "40%",
              outline: "none",
            }}
            value={tableSlug}
            onChange={(e) => setTableSlug(e.target.value)}
          />

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            style={{
              backgroundColor: loading ? "#aaa" : "#2ecc71",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "0.2s",
            }}
          >
            {loading ? "Placing..." : "Place Order"}
          </button>

          <button
            onClick={addDummyItem}
            style={{
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "0.2s",
            }}
          >
            Add Item ➕
          </button>
        </div>
      </div>

      {/* Orders Section */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "1.5rem",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: "600",
            color: "#222",
            marginBottom: "1rem",
          }}
        >
          📦 Order History
        </h2>

        {orders.length === 0 ? (
          <p style={{ color: "#777", textAlign: "center" }}>
            No orders yet. Place your first order!
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {orders.map((order) => (
              <li
                key={order._id}
                style={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #ddd",
                  padding: "12px 15px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Table:</strong> {order.tableId?.qrSlug || "N/A"}
                </p>
                <p>
                  <strong>Total:</strong>{" "}
                  <span style={{ color: "#2ecc71", fontWeight: "600" }}>
                    ₹{order.totals}
                  </span>
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    style={{
                      color:
                        order.status === "completed"
                          ? "#27ae60"
                          : order.status === "pending"
                          ? "#f39c12"
                          : "#e74c3c",
                      fontWeight: "600",
                    }}
                  >
                    {order.status}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
