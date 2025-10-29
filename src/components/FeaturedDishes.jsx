import React from "react";
import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Paneer Butter Masala",
      desc: "Rich creamy tomato gravy with soft paneer cubes.",
      image: dish1,
    },
    {
      name: "Veg Biryani",
      desc: "Aromatic rice cooked with vegetables and spices.",
      image: dish2,
    },
    {
      name: "Butter Naan",
      desc: "Soft buttery naan perfect with any curry.",
      image: dish3,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "50px 0",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#1f2937",
          marginBottom: "30px",
        }}
      >
        🍽️ Featured Dishes
      </h2>

      {/* Horizontal container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          padding: "0 20px",
        }}
      >
        {dishes.map((dish, index) => (
          <div
            key={index}
            style={{
              width: "290px",
              backgroundColor: "white",
              border: "1px solid #d1d5db",
              borderRadius: "16px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)")
            }
          >
            <img
              src={dish.image}
              alt={dish.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            />
            <div style={{ padding: "15px", textAlign: "center" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1f2937",
                }}
              >
                {dish.name}
              </h3>
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  marginTop: "6px",
                }}
              >
                {dish.desc}
              </p>
              <button
                style={{
                  marginTop: "12px",
                  backgroundColor: "#FFD700",
                  color: "#000",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "0.3s",
                  boxShadow: "0 3px 8px rgba(255, 215, 0, 0.3)",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#E6C200")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#FFD700")
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDishes;
