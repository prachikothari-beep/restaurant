import React, { useEffect, useState } from "react";
import api from "../services/api";

const Menu = ({ tableSlug }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  // ✅ Fetch menu data
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const [itemsRes, catRes] = await Promise.all([
          api.get("/menu/items"),
          api.get("/menu/categories"),
        ]);

        const fetchedItems = itemsRes.data.items || [];
        const fetchedCategories = catRes.data.categories || [];

        setItems(fetchedItems);
        setCategories(fetchedCategories);

        if (fetchedCategories.length > 0) {
          setActiveCategoryId(fetchedCategories[0]._id);
        }
      } catch (error) {
        console.error("❌ Error fetching menu:", error);
      }
    };

    fetchMenuData();
  }, []);

  // ✅ Filter items by selected category ID
  const filteredItems = activeCategoryId
    ? items.filter((item) => item.categoryId === activeCategoryId)
    : items;

  // ✅ Add to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((c) => c._id === item._id);
      if (existing) {
        return prevCart.map((c) =>
          c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // ✅ Remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // ✅ Calculate total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fffdf8",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* 🌟 Header */}
      <header
        style={{
          background: "linear-gradient(90deg, #d4af37, #f1c40f)",
          textAlign: "center",
          color: "white",
          padding: "1.5rem 0",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            letterSpacing: "1px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          🍽️ Scan n Dine
        </h1>
        {tableSlug && (
          <p
            style={{
              fontSize: "0.9rem",
              opacity: 0.9,
              marginTop: "0.3rem",
            }}
          >
            Table: <strong>{tableSlug}</strong>
          </p>
        )}
      </header>

      {/* 🌟 Categories */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "10px",
          padding: "1rem 1.2rem",
          borderBottom: "2px solid #f8e5b5",
          backgroundColor: "#fffaf1",
        }}
      >
        {categories.length > 0 ? (
          categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setActiveCategoryId(cat._id)}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                border:
                  activeCategoryId === cat._id
                    ? "2px solid #b8860b"
                    : "1.5px solid #d9b24d",
                background:
                  activeCategoryId === cat._id
                    ? "linear-gradient(90deg, #d4af37, #f1c40f)"
                    : "#fff",
                color:
                  activeCategoryId === cat._id ? "white" : "#a67c00",
                fontWeight: "600",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow:
                  activeCategoryId === cat._id
                    ? "0 3px 10px rgba(0,0,0,0.2)"
                    : "none",
                whiteSpace: "nowrap",
              }}
            >
              {cat.name}
            </button>
          ))
        ) : (
          <p style={{ color: "#999" }}>Loading categories...</p>
        )}
      </div>

      {/* 🌟 Items Grid */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          padding: "2rem",
        }}
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item._id}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                overflow: "hidden",
                border: "1.5px solid #f8e5b5",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1rem" }}>
                <h2
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#b8860b",
                    marginBottom: "0.3rem",
                  }}
                >
                  {item.name}
                </h2>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#777",
                    minHeight: "40px",
                    marginBottom: "0.8rem",
                  }}
                >
                  {item.description || "Deliciously prepared for you."}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#b8860b",
                      fontWeight: "700",
                      fontSize: "1rem",
                    }}
                  >
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      background:
                        "linear-gradient(90deg, #d4af37, #f1c40f)",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "10px",
                      fontWeight: "600",
                      fontSize: "0.85rem",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              color: "#999",
              fontSize: "1rem",
            }}
          >
            No items found in this category.
          </p>
        )}
      </main>

      {/* 🌟 Cart Section */}
      {cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "white",
            borderTop: "2px solid #f8e5b5",
            boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
            padding: "1rem 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <p
            style={{
              color: "#a67c00",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            {cart.length} item(s) | Total:{" "}
            <span style={{ color: "#b8860b", fontWeight: "700" }}>
              ₹{total}
            </span>
          </p>
          <button
            onClick={() => alert("Proceeding to checkout...")}
            style={{
              background: "linear-gradient(90deg, #d4af37, #f1c40f)",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "0.95rem",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            Checkout →
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
