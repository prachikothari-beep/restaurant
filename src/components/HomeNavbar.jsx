import { Link } from "react-router-dom";
import { QrCode, Utensils } from "lucide-react";

const HomeNavbar = () => (
  <nav
    style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backgroundColor: "black",
      boxShadow: "0 2px 10px rgba(255, 215, 0, 0.4)",
      padding: "10px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    {/* Left Side - Logo */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, gold, orange)",
          borderRadius: "50%",
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 10px rgba(255, 215, 0, 0.6)",
          width: "42px",
          height: "42px",
        }}
      >
        <QrCode color="black" size={20} style={{ position: "absolute", opacity: 0.7 }} />
        <Utensils color="black" size={22} />
      </div>

      <span
        style={{
          fontWeight: "bold",
          fontSize: "28px",
          color: "gold",
          letterSpacing: "1px",
        }}
      >
        Scan n Dine
      </span>
    </div>

    {/* Right Side - Navigation Links */}
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "35px",
        listStyle: "none",
        margin: 0,
        padding: 0,
        alignItems: "center",
      }}
    >
      <li><Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Home</Link></li>
      <li><Link to="/menu" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Menu</Link></li>
      <li><Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>About</Link></li>
      <li><Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Contact</Link></li>
      <li><Link to="/login" style={{ color: "gold", textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}>Login</Link></li>
    </ul>
  </nav>
);

export default HomeNavbar;
