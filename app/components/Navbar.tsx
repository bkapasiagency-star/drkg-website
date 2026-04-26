export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        borderBottom: "1px solid #e5e7eb",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT - LOGO + NAME */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="CA Logo"
            style={{
              height: "48px",
              width: "auto",
              objectFit: "contain",
            }}
          />

          <div>
            <div
              style={{
                fontWeight: "700",
                fontSize: "18px",
                color: "#1f3f5b",
              }}
            >
              DRKG & Co.
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>
              Chartered Accountants
            </div>
          </div>
        </div>

        {/* RIGHT - NAV */}
        <nav style={{ display: "flex", gap: "30px" }}>
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: "#1f3f5b",
                fontWeight: "500",
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}