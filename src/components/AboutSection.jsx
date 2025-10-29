import { motion } from "framer-motion";
import React from "react";

const AboutSection = () => (
  <section
    style={{
      position: "relative",
      padding: "100px 0",
      background: "#ffffff",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
    }}
  >
    {/* Light Background Glow (subtle for white theme) */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "300px",
        height: "300px",
        backgroundColor: "rgba(255, 215, 0, 0.08)",
        borderRadius: "50%",
        filter: "blur(100px)",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "350px",
        height: "350px",
        backgroundColor: "rgba(255, 99, 71, 0.08)",
        borderRadius: "50%",
        filter: "blur(100px)",
      }}
    ></div>

    {/* Main Content */}
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative",
        zIndex: 10,
        padding: "0 24px",
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "44px",
          fontWeight: 800,
          color: "#222",
          marginBottom: "20px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        About <span style={{ color: "#f59e0b" }}>Scan n Dine</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          color: "#333",
          fontSize: "18px",
          lineHeight: 1.8,
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <strong>Scan n Dine</strong> revolutionizes your dining experience with seamless QR
        code ordering, quick service, and a modern ambience. Our mission is to make dining{" "}
        <span style={{ color: "#f59e0b", fontWeight: "600" }}>safe</span>,{" "}
        <span style={{ color: "#f59e0b", fontWeight: "600" }}>fast</span>, and{" "}
        <span style={{ color: "#f59e0b", fontWeight: "600" }}>enjoyable</span> for everyone.
        Whether you’re a foodie, a family, or a busy professional — we make your
        mealtime smarter and smoother.
      </motion.p>

      {/* Highlight Tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{
          display: "inline-block",
          background: "linear-gradient(to right, #fff8dc, #ffe4e1)",
          border: "1px solid #facc15",
          padding: "10px 32px",
          borderRadius: "9999px",
          color: "#92400e",
          fontWeight: "600",
          boxShadow: "0 0 10px rgba(255,215,0,0.3)",
          fontSize: "16px",
        }}
      >
        Est. 2025
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
