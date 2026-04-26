"use client";

export default function ServicesPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>

      {/* ================= HERO ================= */}
      <section
        style={{
          background: "#2f5673",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          <h1 style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "20px"
          }}>
            Our Services
          </h1>

          <p style={{
            color: "#e5e7eb",
            fontSize: "16px",
            lineHeight: "1.8"
          }}>
            Comprehensive Chartered Accountancy services designed to ensure
            compliance, clarity, and structured financial growth for individuals and businesses.
          </p>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section style={{ padding: "90px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2 style={{
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "50px",
            color: "#1f3f5b"
          }}>
            Professional Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >

            {[
              {
                title: "Taxation Services",
                desc: "Income tax planning, return filing, and advisory to ensure compliance and optimized tax structure.",
              },
              {
                title: "Audit & Assurance",
                desc: "Statutory audits, internal audits, and financial reviews ensuring transparency and accuracy.",
              },
              {
                title: "GST & Compliance",
                desc: "GST registration, return filing, and advisory ensuring smooth compliance with regulations.",
              },
              {
                title: "Accounting & Bookkeeping",
                desc: "Structured accounting systems, financial reporting, and ongoing bookkeeping support.",
              },
              {
                title: "Project Finance",
                desc: "Financial planning, CMA reports, and assistance in securing funding from banks and institutions.",
              },
              {
                title: "Bank Audits",
                desc: "Concurrent audits, stock audits, and other bank-related financial verification services.",
              },
            ].map((service, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  padding: "35px",
                  borderRadius: "16px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0,0,0,0.06)";
                }}
              >
                <h3 style={{
                  fontSize: "18px",
                  color: "#1f3f5b",
                  marginBottom: "12px",
                  fontWeight: "600"
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: "14px",
                  color: "#4b5563",
                  lineHeight: "1.8"
                }}>
                  {service.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section style={{ padding: "90px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          <h2 style={{
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "40px",
            color: "#1f3f5b"
          }}>
            Why Choose Us
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px"
          }}>
            {[
              "13+ Years of Experience",
              "1000+ Clients Served",
              "30+ Industries Exposure",
              "Structured & Reliable Approach",
            ].map((item, i) => (
              <div key={i} style={{
                background: "#f8fafc",
                padding: "25px",
                borderRadius: "12px",
                textAlign: "center"
              }}>
                <p style={{
                  fontWeight: "600",
                  color: "#1f3f5b"
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#2f5673"
      }}>
        <h2 style={{
          fontSize: "28px",
          color: "#ffffff",
          marginBottom: "20px"
        }}>
          Need Professional Assistance?
        </h2>

        <button style={{
          background: "#ff7a1a",
          color: "#fff",
          padding: "14px 30px",
          borderRadius: "8px",
          border: "none",
          fontWeight: "600",
          cursor: "pointer"
        }}>
          Get Consultation
        </button>
      </section>

    </main>
  );
}