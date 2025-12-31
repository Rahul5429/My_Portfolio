import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      style={{
        padding: "110px 10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "80px",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT TEXT */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "800",
            marginBottom: "22px",
            background: "linear-gradient(90deg,#38bdf8,#22d3ee)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Full Stack Developer
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "19px",
            lineHeight: "1.8",
            color: "#cbd5f5",
          }}
        >
          Final-year undergraduate from <b>IIT Jammu</b> with strong hands-on
          experience in building and deploying complete web applications.
          Passionate about clean code, system design, and solving real-world
          engineering problems through scalable full stack solutions.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div
        style={{
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          padding: "7px",
          background: "linear-gradient(135deg,#38bdf8,#22d3ee)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
          transition: "all 0.35s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 35px 80px rgba(56,189,248,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.8)";
        }}
      >
        <img
          src={profile}
          alt="Rahul Kumar"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "contain", // 🔥 THIS FIXES FACE CUTTING
            backgroundColor: "#020617",
          }}
        />
      </div>
    </section>
  );
}
