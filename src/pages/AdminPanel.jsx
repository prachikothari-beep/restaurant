import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminPanel() {
  const [categories, setCategories] = useState([]);
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };

        const [catRes, tableRes, orderRes, staffRes] = await Promise.all([
          api.get("/menu/categories", { headers }),
          api.get("/tables", { headers }),
          api.get("/orders", { headers }),
          api.get("/auth/staff", { headers }),
        ]);

        console.log("🧾 Orders Data:", orderRes.data);
        console.log("📋 Categories Data:", catRes.data);

        // 🧠 Normalize response in case backend sends { data: [...] }
        setCategories(Array.isArray(catRes.data) ? catRes.data : catRes.data.data || []);
        setTables(Array.isArray(tableRes.data) ? tableRes.data : tableRes.data.data || []);
        setOrders(Array.isArray(orderRes.data) ? orderRes.data : orderRes.data.data || []);
        setStaff(Array.isArray(staffRes.data) ? staffRes.data : staffRes.data.data || []);
      } catch (err) {
        console.error("❌ Error loading admin data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return (
      <div style={loadingContainer}>
        <div style={spinner}></div>
        <p style={{ marginTop: "10px" }}>Loading Admin Panel...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={mainContainer}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={title}>🍽️ Scan n Dine Admin Dashboard</h1>
        <p style={subtitle}>Manage your restaurant with elegance and ease</p>
      </header>

      {/* Grid */}
      <div style={gridContainer}>
        {/* Orders */}
        <div style={cardStyle}>
          <h2 style={sectionTitle}>🧾 Current Orders</h2>
          {orders.length === 0 ? (
            <p style={emptyText}>No active orders yet.</p>
          ) : (
            orders.map((o) => (
              <div key={o._id} style={miniCard}>
                <div style={cardHeader}>
                  <h3 style={{ margin: 0, color: "#b8860b" }}>
                    Table #{o.table?.number ?? "N/A"}
                  </h3>
                  <span
                    style={{
                      backgroundColor:
                        o.status === "completed"
                          ? "#fff8dc"
                          : o.status === "in-progress"
                          ? "#faebd7"
                          : "#f5f5dc",
                      color: "#8b7500",
                      padding: "3px 10px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      border: "1px solid #d4af37",
                    }}
                  >
                    {o.status}
                  </span>
                </div>
                <p style={{ fontSize: "13px", marginTop: "5px" }}>
                  <strong>Staff:</strong> {o.assignedStaff?.name || "Unassigned"}
                </p>
                <ul style={{ paddingLeft: "18px", marginTop: "5px" }}>
                  {o.items?.length > 0 ? (
                    o.items.map((i, idx) => (
                      <li key={idx} style={{ fontSize: "13px" }}>
                        {i.name} × {i.qty}
                      </li>
                    ))
                  ) : (
                    <li>No items</li>
                  )}
                </ul>
              </div>
            ))
          )}
        </div>

        {/* Staff */}
        <div style={cardStyle}>
          <h2 style={sectionTitle}>👨‍🍳 Staff Members</h2>
          {staff.length === 0 ? (
            <p style={emptyText}>No staff registered.</p>
          ) : (
            staff.map((s) => (
              <div key={s._id} style={miniCard}>
                <h3 style={{ margin: 0, color: "#b8860b" }}>{s.name}</h3>
                <p style={{ fontSize: "13px", color: "#555" }}>{s.email}</p>
                <p style={{ fontSize: "12px", color: "#888" }}>
                  Role: {s.role || "Staff"}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Categories */}
        <div style={cardStyle}>
          <h2 style={sectionTitle}>📋 Menu Categories</h2>
          {categories.length === 0 ? (
            <p style={emptyText}>No categories added yet.</p>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {categories.map((c) => (
                <span
                  key={c._id}
                  style={{
                    backgroundColor: "#fff8dc",
                    color: "#b8860b",
                    padding: "8px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: 500,
                    border: "1px solid #d4af37",
                  }}
                >
                  {c.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Tables */}
        <div style={cardStyle}>
          <h2 style={sectionTitle}>🪑 Tables</h2>
          {tables.length === 0 ? (
            <p style={emptyText}>No tables found.</p>
          ) : (
            tables.map((t) => (
              <div key={t._id} style={miniCard}>
                <h3 style={{ margin: 0, color: "#b8860b" }}>
                  Table #{t.number}
                </h3>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  QR: {t.qrSlug}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

/* ---- Styles ---- */
const mainContainer = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #fffdf8, #fdf6e3)",
  padding: "40px 20px",
  fontFamily: "Poppins, sans-serif",
};

const loadingContainer = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fffaf0",
  color: "#b7950b",
};

const spinner = {
  width: "40px",
  height: "40px",
  border: "4px solid #f2e1a3",
  borderTopColor: "#d4af37",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const title = {
  color: "#b8860b",
  fontSize: "2.2rem",
  margin: "0",
  fontWeight: "700",
};

const subtitle = { color: "#8b8000", fontSize: "15px" };

const gridContainer = {
  display: "grid",
  gap: "30px",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  maxWidth: "1200px",
  margin: "0 auto",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "15px",
  padding: "20px",
  boxShadow: "0 4px 10px rgba(212, 175, 55, 0.15)",
  border: "1px solid #f0e6b2",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const sectionTitle = {
  fontSize: "18px",
  color: "#8b7500",
  marginBottom: "15px",
  borderBottom: "1px solid #f0e6b2",
  paddingBottom: "8px",
  fontWeight: "600",
};

const emptyText = {
  color: "#b8a000",
  fontSize: "14px",
  fontStyle: "italic",
};

const miniCard = {
  backgroundColor: "#fffaf0",
  borderRadius: "10px",
  padding: "10px 15px",
  marginBottom: "10px",
  border: "1px solid #f3e6b0",
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
