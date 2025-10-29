import { Smartphone, Timer, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Smartphone, title: "Contactless", desc: "Order safely from your phone." },
  { icon: Timer, title: "Quick Service", desc: "Get your food faster." },
  { icon: ShieldCheck, title: "Secure Payment", desc: "Pay securely online." },
  { icon: Star, title: "Top Rated", desc: "Loved by our customers." },
];

const FeaturesSection = () => (
  <section
    className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    {/* Golden Ambient Glow Effects */}
    <div
      style={{
        position: "absolute",
        top: "-5rem",
        left: "-5rem",
        width: "20rem",
        height: "20rem",
        backgroundColor: "rgba(255, 215, 0, 0.15)",
        borderRadius: "50%",
        filter: "blur(120px)",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        bottom: "-6rem",
        right: "-6rem",
        width: "24rem",
        height: "24rem",
        backgroundColor: "rgba(255, 223, 0, 0.1)",
        borderRadius: "50%",
        filter: "blur(120px)",
      }}
    ></div>

    {/* Heading */}
    <h2
      className="text-4xl md:text-5xl font-extrabold mb-16"
      style={{
        background: "linear-gradient(90deg, #FFD700, #FFB000)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 0 20px rgba(255,215,0,0.4)",
      }}
    >
      Why Choose <span className="text-white">Scan n Dine?</span>
    </h2>

    {/* Features Cards */}
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 30px rgba(255,215,0,0.4)",
          }}
          style={{
            background: "linear-gradient(145deg, rgba(18,18,18,0.95), rgba(36,36,36,0.9))",
            border: "1px solid rgba(255,215,0,0.3)",
            borderRadius: "1rem",
            padding: "2rem",
            width: "270px",
            textAlign: "center",
            color: "white",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,215,0,0.25), rgba(0,0,0,0.8))",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto 1rem auto",
              boxShadow: "0 0 20px rgba(255,215,0,0.3)",
            }}
          >
            <f.icon color="#FFD700" size={36} />
          </div>
          <h3
            style={{
              color: "#FFD700",
              fontSize: "1.25rem",
              fontWeight: "700",
              marginBottom: "0.5rem",
            }}
          >
            {f.title}
          </h3>
          <p style={{ color: "#E5E5E5", fontSize: "0.95rem" }}>{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
