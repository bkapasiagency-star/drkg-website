export default function StatsSection() {
  const stats = [
    { top: "13+", bottom: "Years of Experience" },
    { top: "1000+", bottom: "Clients Served" },
    { top: "End-to-End", bottom: "Financial Solutions" },
    { top: "Detail-Oriented", bottom: "Professional Approach" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1f4e79, #2f6488)",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "40px 20px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "160px", // 🔥 FIXES ALIGNMENT
            }}
          >
            <div
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#ff7a18",
                marginBottom: "10px",
              }}
            >
              {item.top}
            </div>

            <div
              style={{
                color: "#e2e8f0",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              {item.bottom}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}