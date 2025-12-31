export default function Skills() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "JWT Authentication",
    "REST APIs",
    "Git & GitHub",
    "Cloud Deployment",
  ];

  return (
    <section id="skills" style={{ padding: "80px 10%" }}>
      <h2
        style={{
          color: "#38bdf8",
          fontSize: "32px",
          marginBottom: "35px",
        }}
      >
        Technical Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "22px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              padding: "22px",
              borderRadius: "16px",
              background: "#020617",
              boxShadow: "10px 10px 25px #000, -4px -4px 10px #1e293b",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "500",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.12)";
              e.currentTarget.style.boxShadow =
                "0 20px 45px rgba(56,189,248,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "10px 10px 25px #000, -4px -4px 10px #1e293b";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
