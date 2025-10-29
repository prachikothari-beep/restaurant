import { motion } from "framer-motion";
import heroImg from "../assets/menu-mockup.png";

const HeroSection = () => {
  const styles = {
    section: {
      background: "#ffffff",
      color: "#000",
      padding: "80px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1200px",
      width: "100%",
      gap: "40px",
      flexWrap: "wrap",
    },
    left: {
      flex: 1,
      minWidth: "300px",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "700",
      color: "#D4AF37", // royal gold
      marginBottom: "20px",
      fontFamily: "Poppins, sans-serif",
    },
    subText: {
      fontSize: "1.1rem",
      color: "#333",
      marginBottom: "30px",
      lineHeight: "1.6",
    },
    buttonContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },
    goldBtn: {
      background: "#D4AF37",
      color: "#fff",
      padding: "12px 28px",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 4px 10px rgba(212, 175, 55, 0.3)",
    },
    outlineBtn: {
      background: "transparent",
      color: "#D4AF37",
      border: "2px solid #D4AF37",
      padding: "12px 28px",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
    },
    right: {
      flex: 1,
      minWidth: "280px",
      display: "flex",
      justifyContent: "center",
    },
    img: {
      width: "350px",
      borderRadius: "16px",
      boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={styles.left}
        >
          <h1 style={styles.heading}>Welcome to Scan n Dine 🍽️</h1>
          <p style={styles.subText}>
            Experience the luxury of contactless dining with our premium QR
            system — smooth, safe, and sophisticated.
          </p>
          <div style={styles.buttonContainer}>
            <motion.button whileHover={{ scale: 1.05 }} style={styles.goldBtn}>
              View Menu
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} style={styles.outlineBtn}>
              Book Table
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={styles.right}
        >
          <img src={heroImg} alt="Dining" style={styles.img} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
