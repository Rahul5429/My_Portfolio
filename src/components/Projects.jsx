export default function Projects() {
  const projects = [
    {
      title: "Task Management System",
      desc: "A complete task tracking platform enabling users to create, update, and manage tasks securely with authentication and role-based access.",
      tech: "React, Node.js, MongoDB, JWT",
    },
    {
      title: "User Authentication Platform",
      desc: "A secure authentication system implementing login, registration, password encryption, and protected routes with smooth user experience.",
      tech: "React, Express, JWT, Redux",
    },
    {
      title: "User Enquiry Dashboard",
      desc: "A full-stack dashboard allowing admins to manage user enquiries with optimized APIs and clean data flow.",
      tech: "React, Express, MongoDB",
    },
  ];

  return (
    <section id="projects" style={{ padding: "80px 10%" }}>
      <h2 style={{ color: "#38bdf8", marginBottom: "30px" }}>Projects</h2>

      {projects.map((p) => (
        <div
          key={p.title}
          style={{
            marginBottom: "30px",
            padding: "25px",
            borderRadius: "18px",
            background: "#020617",
            boxShadow: "10px 10px 25px rgba(0,0,0,0.7)",
          }}
        >
          <h3 style={{ color: "#22d3ee" }}>{p.title}</h3>
          <p style={{ margin: "10px 0", lineHeight: "1.6" }}>{p.desc}</p>
          <small style={{ color: "#94a3b8" }}>{p.tech}</small>
        </div>
      ))}
    </section>
  );
}
