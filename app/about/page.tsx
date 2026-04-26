"use client";

export default function AboutPage() {
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
            About DRKG & Co.
          </h1>

          <p style={{
            color: "#e5e7eb",
            fontSize: "16px",
            lineHeight: "1.8"
          }}>
            A Chartered Accountancy firm committed to delivering structured,
            reliable, and practical financial solutions with a focus on clarity,
            compliance, and long-term client relationships.
          </p>

        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section style={{ padding: "90px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          <h2 style={{
            fontSize: "30px",
            color: "#1f3f5b",
            marginBottom: "25px",
            textAlign: "center"
          }}>
            Who We Are
          </h2>

          <p style={{
            lineHeight: "1.9",
            color: "#374151",
            fontSize: "15px",
            textAlign: "center"
          }}>
            DRKG & Co. is a Chartered Accountancy practice based in Surat, Gujarat,
            offering professional services in taxation, audit, accounting, and financial advisory.
            The firm focuses on delivering structured, reliable, and practical financial solutions
            with an emphasis on clarity, compliance, and long-term client relationships.
          </p>

        </div>
      </section>

      {/* ================= KOMAL ================= */}
      <section style={{ padding: "90px 20px", background: "#f8fafc" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >

          <img
            src="/komal.jpg"
            alt="CA Komal Bhavnagari"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 30px 70px rgba(0,0,0,0.12)",
            }}
          />

          <div>

            <h2 style={{
              fontSize: "30px",
              color: "#1f3f5b",
              marginBottom: "10px"
            }}>
              CA Komal Bhavnagari
            </h2>

            <p style={{
              color: "#ff7a1a",
              fontWeight: "500",
              marginBottom: "20px"
            }}>
              B.Com, LL.B, F.C.A • 13+ Years Experience
            </p>

            <p style={{
              lineHeight: "1.9",
              color: "#374151",
              fontSize: "15px",
              marginBottom: "15px"
            }}>
              CA Komal Bhavnagari brings over a decade of professional experience
              in taxation, accounting, audit, and financial advisory services.
            </p>

            <p style={{
              lineHeight: "1.9",
              color: "#374151",
              fontSize: "15px",
              marginBottom: "15px"
            }}>
              She has worked with individuals, firms, and businesses across
              various industries, providing structured financial solutions
              with a strong emphasis on compliance and accuracy.
            </p>

            <p style={{
              lineHeight: "1.9",
              color: "#374151",
              fontSize: "15px"
            }}>
              Her approach focuses on clarity, disciplined execution, and building
              long-term professional relationships with clients.
            </p>

          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section style={{ padding: "90px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2 style={{
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "50px",
            color: "#1f3f5b"
          }}>
            Our Approach
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px"
          }}>
            {[
              "Clarity in Financial Decisions",
              "Strong Compliance Framework",
              "Structured & Timely Execution",
              "Client-Centric Advisory",
              "Risk-Aware Financial Structuring",
              "Proactive Advisory & Strategic Insight",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#f8fafc",
                  padding: "35px",
                  borderRadius: "14px",
                  textAlign: "center",
                  transition: "0.3s",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.05)";
                }}
              >
                <p style={{
                  fontWeight: "600",
                  color: "#1f3f5b",
                  fontSize: "15px"
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section style={{
        background: "#2f5673",
        padding: "70px 20px",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}>
          {[
            { n: "13+", t: "Years Experience" },
            { n: "1000+", t: "Clients Served" },
            { n: "30+", t: "Industries Catered" },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <h2 style={{ color: "#ff7a1a", fontSize: "36px" }}>
                {item.n}
              </h2>
              <p style={{ color: "#e5e7eb" }}>{item.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#f8fafc"
      }}>
        <h2 style={{
          fontSize: "28px",
          color: "#1f3f5b",
          marginBottom: "20px"
        }}>
          Let’s Work Together
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