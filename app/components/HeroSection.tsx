export default function HeroSection() {
  return (
    <section
      style={{
        width: "100%",
        background: "#264a67",
        padding: "90px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* CONTAINER */}
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          textAlign: "center",
        }}
      >

        {/* SMALL TAG */}
        <p
          style={{
            color: "#ff7a1a",
            letterSpacing: "2px",
            fontSize: "12px",
            marginBottom: "15px",
          }}
        >
          CHARTERED ACCOUNTANTS
        </p>

        {/* MAIN TITLE */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          DRKG & Co.
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "16px",
            color: "#d1d5db",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          A Chartered Accountancy practice based in Surat, Gujarat, providing taxation,
          audit, and financial advisory services with a focus on clarity, discipline,
          and long-term client relationships.
        </p>

        {/* BUTTON */}
        <div style={{ marginTop: "35px" }}>
          <a href="/contact">
            <button
              style={{
                background: "#ff7a1a",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "6px",
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Get Consultation
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}