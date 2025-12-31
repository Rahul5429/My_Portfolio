export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 10%",
        background: "linear-gradient(180deg,#020617,#020617dd)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0 12px 35px rgba(0,0,0,0.7)",
      }}
    >
      {/* Name */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "700",
          color: "#38bdf8",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.08)";
          e.target.style.textShadow = "0 0 18px #38bdf8";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.textShadow = "none";
        }}
      >
        Rahul Kumar
      </h1>

      {/* Links */}
      <div style={{ display: "flex", gap: "28px" }}>
        {["Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "#e5e7eb",
              textDecoration: "none",
              fontSize: "16px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.12)";
              e.target.style.color = "#38bdf8";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.color = "#e5e7eb";
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
