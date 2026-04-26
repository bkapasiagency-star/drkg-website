"use client";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [industries, setIndustries] = useState(0);

  useEffect(() => {
    let y = 0;
    const interval1 = setInterval(() => {
      y += 1;
      setYears(y);
      if (y >= 13) clearInterval(interval1);
    }, 80);

    let c = 0;
    const interval2 = setInterval(() => {
      c += 20;
      setClients(c);
      if (c >= 1000) clearInterval(interval2);
    }, 20);

    let i = 0;
    const interval3 = setInterval(() => {
      i += 1;
      setIndustries(i);
      if (i >= 30) clearInterval(interval3);
    }, 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  const stats = [
    { value: `${years}+`, label: "Years of Experience" },
    { value: `${clients}+`, label: "Clients Served" },
    { value: `${industries}+`, label: "Industries Catered" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1f4e79, #2f6488)",
        padding: "90px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              padding: "40px 20px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.12)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#ff7a18",
                marginBottom: "10px",
              }}
            >
              {item.value}
            </div>

            <div
              style={{
                color: "#e2e8f0",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}