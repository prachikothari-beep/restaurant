import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterStatus, setFilterStatus] = useState("placed");

  const statusOptions = ["placed", "preparing", "ready", "served", "canceled"];

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, [filterStatus]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please login again.");
        navigate("/login");
        return;
      }

      const res = await axios.get(
        `http://localhost:4000/api/orders?status=${filterStatus}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setOrders(res.data.orders || []);
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:4000/api/orders/${orderId}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchOrders();
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fffdf8, #fdf6e3)",
        padding: "40px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "#b8860b",
            fontSize: "2.2rem",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          👨‍🍳 Staff Dashboard
        </h1>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#b8860b",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#a0740a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#b8860b")}
        >
          Logout
        </button>
      </div>

      {/* Filter Buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        {statusOptions.map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            style={{
              padding: "8px 15px",
              borderRadius: "20px",
              border: filterStatus === status ? "1px solid #b8860b" : "1px solid #e5d8a1",
              backgroundColor: filterStatus === status ? "#b8860b" : "#fffaf0",
              color: filterStatus === status ? "#fff" : "#8b7500",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading and Error */}
      {loading && <p style={{ textAlign: "center", color: "#8b7500" }}>Loading orders...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {/* Orders */}
      {!loading && !error && orders.length === 0 && (
        <p style={{ textAlign: "center", color: "#b8a000" }}>
          No {filterStatus} orders yet.
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {orders.map((order) => (
          <div
            key={order._id}
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(212, 175, 55, 0.15)",
              border: "1px solid #f0e6b2",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 6px 14px rgba(212,175,55,0.25)")}
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 4px 10px rgba(212,175,55,0.15)")}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#b8860b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Table #{order.tableId?.number || "N/A"}
              </h2>
              <span
                style={{
                  backgroundColor: "#fff8dc",
                  color: "#8b7500",
                  fontSize: "12px",
                  padding: "4px 10px",
                  borderRadius: "10px",
                  border: "1px solid #d4af37",
                }}
              >
                {order.status}
              </span>
            </div>

            {/* Items */}
            <div
              style={{
                borderTop: "1px solid #f0e6b2",
                paddingTop: "8px",
                marginBottom: "8px",
              }}
            >
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "#444",
                  }}
                >
                  <span>
                    {item.menuItemId?.name || "Item"} × {item.qty}
                  </span>
                  <span>₹{(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Total and Time */}
            <div
              style={{
                borderTop: "1px solid #f0e6b2",
                paddingTop: "8px",
                fontSize: "13px",
                color: "#555",
              }}
            >
              <p style={{ margin: "5px 0" }}>
                <strong>Total:</strong> ₹{order.total?.toFixed(2) || 0}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Time:</strong>{" "}
                {new Date(order.createdAt).toLocaleTimeString()}
              </p>
            </div>

            {/* Status Dropdown */}
            <div
              style={{
                borderTop: "1px solid #f0e6b2",
                paddingTop: "10px",
                marginTop: "8px",
              }}
            >
              <select
                value={order.status}
                onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid #d4af37",
                  backgroundColor: "#fffaf0",
                  color: "#8b7500",
                  fontSize: "14px",
                  cursor: "pointer",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
                onBlur={(e) => (e.target.style.borderColor = "#d4af37")}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffDashboard;
