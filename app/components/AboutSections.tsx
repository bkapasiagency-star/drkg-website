export default function AboutSections() {
  return (
    <>
      {/* ABOUT FIRM */}
      <section style={{ padding: "90px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          
          <h2 style={{
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "20px",
            color: "#0f2a44"
          }}>
            About the Firm
          </h2>

          <p style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#475569"
          }}>
            DRKG & Co. is a Chartered Accountancy practice based in Surat, Gujarat,
            offering professional services in taxation, audit, accounting, and
            financial advisory. The firm focuses on delivering structured,
            reliable, and practical financial solutions with an emphasis on
            clarity, compliance, and long-term client relationships.
          </p>

        </div>
      </section>

      {/* ABOUT KOMAL SECTION */}
      <section style={{ padding: "100px 20px", background: "#f8fafc" }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}>

          {/* LEFT - IMAGE */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/komal.jpg"
              alt="CA Komal Bhavnagari"
              style={{
                width: "100%",
                maxWidth: "320px",
                borderRadius: "12px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
              }}
            />
          </div>

          {/* RIGHT - CONTENT */}
          <div>
            <p style={{
              color: "#ff7a18",
              fontSize: "13px",
              letterSpacing: "2px",
              marginBottom: "10px",
              textTransform: "uppercase"
            }}>
              Founder
            </p>

            <h2 style={{
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#0f2a44"
            }}>
              CA Komal Bhavnagari
            </h2>

            <p style={{
              color: "#64748b",
              marginBottom: "20px"
            }}>
              B.Com., LL.B, F.C.A.
            </p>

            <p style={{
              lineHeight: "1.8",
              color: "#475569"
            }}>
              With over 13 years of experience in professional practice,
              CA Komal Bhavnagari leads the firm with a strong focus on
              delivering structured, reliable, and practical financial solutions.
            </p>

            <p style={{
              marginTop: "15px",
              lineHeight: "1.8",
              color: "#475569"
            }}>
              The firm has catered to more than 1000 clients across over 30 industries,
              building long-term relationships grounded in trust, clarity, and
              consistent professional service standards.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}