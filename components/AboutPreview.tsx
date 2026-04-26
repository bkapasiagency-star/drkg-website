export default function AboutPreview() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#ffffff"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "60px",
          alignItems: "center"
        }}
      >
        {/* IMAGE */}
        <img
          src="/komal.jpg"
          alt="CA Komal Bhavnagari"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
          }}
        />

        {/* CONTENT */}
        <div>
          <p
            style={{
              color: "#f97316",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            Founder
          </p>

          <h2
            style={{
              fontSize: "36px",
              margin: "10px 0",
              color: "#1f5f8b"
            }}
          >
            CA Komal Bhavnagari
          </h2>

          <p style={{ color: "#64748b", marginBottom: "20px" }}>
            B.Com., LL.B, F.C.A.
          </p>

          <p
            style={{
              lineHeight: "1.8",
              color: "#334155"
            }}
          >
            With over 13 years of experience in professional practice,
            CA Komal Bhavnagari leads DRKG & Co. with a focus on delivering
            structured, reliable, and practical financial solutions.
          </p>

          <p
            style={{
              marginTop: "15px",
              lineHeight: "1.8",
              color: "#334155"
            }}
          >
            The firm has catered to 1000+ clients across diverse industries,
            building long-term relationships grounded in trust, clarity,
            and consistent service standards.
          </p>
        </div>
      </div>
    </section>
  )
}