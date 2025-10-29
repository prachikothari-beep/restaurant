import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [tab, setTab] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (tab === "login")
      setLoginData((prev) => ({ ...prev, [name]: value }));
    else setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", loginData);
      const { role, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      if (role === "admin") navigate("/admin");
      else if (role === "staff") navigate("/staff");
      else navigate("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios.post("http://localhost:4000/api/auth/register", registerData);
      alert("Account created successfully! You can now login.");
      setTab("login");
    } catch (err) {
      setError("Registration failed. Try another email.");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0d0d0d, #1a1a1a)",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    box: {
      backgroundColor: "#111",
      border: "1px solid #222",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0 0 20px rgba(255,215,0,0.2)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#FFD700",
      marginBottom: "30px",
      letterSpacing: "1px",
    },
    tabContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "25px",
    },
    tabButton: (active) => ({
      flex: 1,
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "600",
      backgroundColor: active ? "#FFD700" : "#333",
      color: active ? "#000" : "#ccc",
      transition: "0.3s",
    }),
    inputWrapper: {
      position: "relative",
      marginBottom: "15px",
    },
    icon: {
      position: "absolute",
      top: "12px",
      left: "12px",
      color: "#FFD700",
    },
    input: {
      width: "100%",
      padding: "12px 40px",
      borderRadius: "8px",
      border: "1px solid #444",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      fontSize: "14px",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#FFD700",
      color: "#000",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "10px",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#e6c200",
    },
    error: {
      color: "red",
      fontSize: "13px",
      marginBottom: "10px",
    },
    footer: {
      marginTop: "25px",
      fontSize: "13px",
      color: "#aaa",
    },
    highlight: {
      color: "#FFD700",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.box}
      >
        <h2 style={styles.heading}>Scan n Dine 🍽️</h2>

        <div style={styles.tabContainer}>
          <button
            onClick={() => setTab("login")}
            style={styles.tabButton(tab === "login")}
          >
            Login
          </button>
          <button
            onClick={() => setTab("register")}
            style={styles.tabButton(tab === "register")}
          >
            Register
          </button>
        </div>

        {tab === "login" ? (
          <form onSubmit={handleLogin}>
            <div style={styles.inputWrapper}>
              <Mail style={styles.icon} />
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Email address"
              />
            </div>
            <div style={styles.inputWrapper}>
              <Lock style={styles.icon} />
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Password"
              />
            </div>
            {error && <p style={styles.error}>{error}</p>}
            <button
              type="submit"
              disabled={loading}
              style={styles.button}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <div style={styles.inputWrapper}>
              <User style={styles.icon} />
              <input
                type="text"
                name="name"
                value={registerData.name}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Full Name"
              />
            </div>
            <div style={styles.inputWrapper}>
              <Mail style={styles.icon} />
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Email address"
              />
            </div>
            <div style={styles.inputWrapper}>
              <Lock style={styles.icon} />
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Password"
              />
            </div>
            {error && <p style={styles.error}>{error}</p>}
            <button
              type="submit"
              disabled={loading}
              style={styles.button}
            >
              {loading ? "Creating..." : "Register"}
            </button>
          </form>
        )}

        <p style={styles.footer}>
          For Customers → <span style={styles.highlight}>Scan QR to view menu</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
