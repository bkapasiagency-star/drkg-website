"use client";

export default function ContactPage() {
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
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "40px",
            color: "#ffffff",
            fontWeight: "700",
            marginBottom: "15px"
          }}>
            Contact Us
          </h1>

          <p style={{
            color: "#e5e7eb",
            fontSize: "16px",
            lineHeight: "1.8"
          }}>
            Get in touch for professional accounting, taxation, and advisory services.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section style={{ padding: "80px 20px", background: "#f8fafc" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >

          {/* LEFT - CONTACT INFO */}
          <div>

            <h2 style={{
              fontSize: "26px",
              marginBottom: "25px",
              color: "#1f3f5b"
            }}>
              Get in Touch
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Phone */}
              <div style={cardStyle}>
                <p style={labelStyle}>Phone</p>
                <p style={valueStyle}>+91 98980 89964</p>
              </div>

              {/* Email */}
              <div style={cardStyle}>
                <p style={labelStyle}>Email</p>
                <p style={valueStyle}>cakomal4@yahoo.com</p>
              </div>

              {/* Address */}
              <div style={cardStyle}>
                <p style={labelStyle}>Office Address</p>
                <p style={valueStyle}>
                  103, Corporate Avenue, Near Jain Temple <br />
                  Timaliyawad, Nanpura <br />
                  Surat – 395001
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT - FORM */}
          <div
            style={{
              background: "#ffffff",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
            }}
          >

            <h2 style={{
              fontSize: "24px",
              marginBottom: "20px",
              color: "#1f3f5b"
            }}>
              Send a Message
            </h2>

            <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

              <input placeholder="Your Name" style={inputStyle} />
              <input placeholder="Your Email" style={inputStyle} />
              <input placeholder="Phone Number" style={inputStyle} />

              <textarea
                placeholder="Your Message"
                rows={4}
                style={inputStyle}
              />

              <button
                style={{
                  background: "#ff7a1a",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "none",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginTop: "10px"
                }}
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section style={{
        padding: "70px 20px",
        textAlign: "center",
        background: "#ffffff"
      }}>
        <h2 style={{
          fontSize: "26px",
          color: "#1f3f5b",
          marginBottom: "15px"
        }}>
          Prefer Quick Response?
        </h2>

        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          Connect with us directly via WhatsApp for faster assistance.
        </p>

        <a
          href="https://wa.me/919898089964"
          target="_blank"
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "12px 25px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          Chat on WhatsApp
        </a>
      </section>

    </main>
  );
}

/* ================= STYLES ================= */

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};

const labelStyle = {
  fontSize: "13px",
  color: "#6b7280",
  marginBottom: "5px"
};

const valueStyle = {
  fontSize: "15px",
  color: "#1f3f5b",
  fontWeight: "500"
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  fontSize: "14px"
};