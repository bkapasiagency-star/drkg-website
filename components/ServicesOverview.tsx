"use client"

const services = [
  "Income Tax Returns",
  "GST Services",
  "Audit & Assurance",
  "Accounting",
  "Project Finance",
  "Bank Audits"
]

export default function ServicesOverview() {
  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#f8fafc"
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "40px",
            color: "#1f5f8b"
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px"
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                padding: "25px",
                borderRadius: "10px",
                background: "#ffffff",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid #e2e8f0"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)"
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(31,95,139,0.15)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(0,0,0,0.05)"
              }}
            >
              <h3 style={{ color: "#1f5f8b" }}>{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}