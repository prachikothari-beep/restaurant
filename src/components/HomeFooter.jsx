import { Facebook, Instagram, Twitter } from "lucide-react";

const HomeFooter = () => (
  <footer
    style={{
      backgroundColor: "#ffffff", // ✅ white background
      color: "#1f2937", // dark gray text
      padding: "20px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "60px",
      position: "relative",
    }}
  >
    {/* Top Divider */}
    <div
      style={{
        width: "80%",
        height: "1px",
        backgroundColor: "rgba(0,0,0,0.1)",
        marginBottom: "15px",
      }}
    ></div>

    {/* Centered Content Row */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
      }}
    >
      <a
        href="#"
        aria-label="Facebook"
        style={{ color: "#1f2937", transition: "0.3s" }}
        onMouseOver={(e) => (e.target.style.color = "#FFD700")}
        onMouseOut={(e) => (e.target.style.color = "#1f2937")}
      >
        <Facebook size={22} />
      </a>

      <a
        href="#"
        aria-label="Instagram"
        style={{ color: "#1f2937", transition: "0.3s" }}
        onMouseOver={(e) => (e.target.style.color = "#FFD700")}
        onMouseOut={(e) => (e.target.style.color = "#1f2937")}
      >
        <Instagram size={22} />
      </a>

      <a
        href="#"
        aria-label="Twitter"
        style={{ color: "#1f2937", transition: "0.3s" }}
        onMouseOver={(e) => (e.target.style.color = "#FFD700")}
        onMouseOut={(e) => (e.target.style.color = "#1f2937")}
      >
        <Twitter size={22} />
      </a>

      <span
        style={{
          height: "20px",
          width: "1px",
          backgroundColor: "rgba(0,0,0,0.2)",
          margin: "0 8px",
        }}
      ></span>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          opacity: 0.9,
          color: "#4b5563",
        }}
      >
        © 2025 <span style={{ color: "#b8860b", fontWeight: "600" }}>Scan n Dine</span>. All rights reserved.
      </p>
    </div>

    {/* Bottom Divider */}
    <div
      style={{
        width: "80%",
        height: "1px",
        backgroundColor: "rgba(0,0,0,0.1)",
        marginTop: "15px",
      }}
    ></div>
  </footer>
);

export default HomeFooter;
