"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f2e47",
        color: "#fff",
        padding: "70px 20px 30px",
        marginTop: "80px"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "50px"
        }}
      >
        {/* LEFT */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/logo.png"
              style={{ width: "55px", borderRadius: "10px" }}
            />
            <div>
              <h3 style={{ margin: 0 }}>DRKG & Co.</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "#bbb" }}>
                Chartered Accountants
              </p>
            </div>
          </div>

          <p style={{ marginTop: "20px", lineHeight: "1.7", color: "#ccc" }}>
            103, Corporate Avenue, Near Jain Temple,<br />
            Timaliawad, Nanpura,<br />
            Surat – 395001
          </p>

          <p style={{ marginTop: "10px" }}>
            📞{" "}
            <a href="tel:+919898089964" style={{ color: "#fff" }}>
              +91 98980 89964
            </a>
          </p>

          <p>
            ✉️{" "}
            <a href="mailto:cakomal4@yahoo.com" style={{ color: "#fff" }}>
              cakomal4@yahoo.com
            </a>
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  transition: "0.3s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff7a1a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#bbb")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto 0",
          background: "rgba(255,255,255,0.05)",
          padding: "18px",
          borderRadius: "10px",
          fontSize: "13px",
          color: "#ccc",
          lineHeight: "1.6"
        }}
      >
        <strong style={{ color: "#fff" }}>Disclaimer:</strong> This website is
        meant for informational purposes only and does not constitute
        solicitation, advertisement, or professional advice. DRKG & Co. shall not
        be responsible for any action taken based on the contents of this
        website. Users are advised to seek professional guidance before acting on
        any information provided herein.
      </div>

      {/* COPYRIGHT */}
      <p
        style={{
          textAlign: "center",
          marginTop: "25px",
          fontSize: "13px",
          color: "#aaa"
        }}
      >
        © 2026 DRKG & Co. All rights reserved.
      </p>
    </footer>
  );
}