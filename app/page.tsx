"use client";

import { useEffect, useRef } from "react";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      <Hero />
      <Divider />
      <Stats />
      <KomalSection />
      <Services />
      <WhyChooseUs />
    </main>
  );
}

/* ---------- ANIMATION ---------- */

function useReveal(ref: any, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }, delay);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, delay]);
}

const hidden = {
  opacity: 0,
  transform: "translateY(40px)",
  transition: "all 0.7s ease"
};

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section style={hero}>
      <div style={container}>
        <p style={tag}>CHARTERED ACCOUNTANTS</p>
        <h1 style={title}>DRKG & Co.</h1>

        <p style={subtitle}>
          A Chartered Accountancy practice based in Surat, Gujarat, providing taxation,
          audit, and financial advisory services with a focus on clarity, discipline,
          and long-term client relationships.
        </p>

        <div style={{ marginTop: "60px" }}>
          <button style={btn}>Get Consultation</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- DIVIDER ---------- */

function Divider() {
  return (
    <div
      style={{
        height: "120px",
        background:
          "linear-gradient(to bottom, #2f536d 0%, #2f536d 40%, rgba(47,83,109,0.7) 70%, transparent 100%)",
        marginBottom: "-60px",
      }}
    />
  );
}

/* ---------- STATS ---------- */

function Stats() {
  return (
    <section style={stats}>
      <div style={container}>
        <div style={grid3}>
          {[
            ["13+", "Years Experience"],
            ["1000+", "Clients Served"],
            ["30+", "Industries Catered"]
          ].map((item, i) => {
            const ref = useRef<any>(null);
            useReveal(ref, i * 150);

            return (
              <div key={i} ref={ref} style={{ ...statCard, ...hidden }}>
                <h2 style={{ color: "#ff7a1a" }}>{item[0]}</h2>
                <p>{item[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- KOMAL SECTION (RESTORED) ---------- */

function KomalSection() {
  const ref = useRef<any>(null);
  useReveal(ref);

  return (
    <section style={light}>
      <div style={{ ...container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }} ref={ref}>
        
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="CA Komal Bhavnagari"
          style={{
            width: "100%",
            borderRadius: "16px",
            objectFit: "cover"
          }}
        />

        <div>
          <h2>CA Komal Bhavnagari</h2>

          <p style={{ color: "#ff7a1a", margin: "10px 0" }}>
            13+ Years • 1000+ Clients • 30+ Industries
          </p>

          <p style={{ lineHeight: "1.7" }}>
            CA Komal Bhavnagari holds qualifications of B.Com., LL.B., and F.C.A.,
            and brings over 13 years of professional experience in taxation,
            accounting, audit, and financial advisory.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            She has been actively engaged in providing professional services to
            individuals, firms, and businesses across diverse industries, with a
            strong emphasis on structured execution and compliance.
          </p>

          <p style={{ marginTop: "15px", fontStyle: "italic", color: "#555" }}>
            “Our focus is not just compliance — it is financial clarity that enables
            confident and informed decision-making.”
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */

function Services() {
  const data = [
    ["Taxation Services", "Strategic tax planning & compliance"],
    ["Audit & Assurance", "Reliable and transparent audits"],
    ["GST & Compliance", "End-to-end GST solutions"],
    ["Accounting", "Accurate financial management"],
    ["Project Finance", "Funding & structuring"],
    ["Bank Audits", "Professional audit services"]
  ];

  return (
    <section style={light}>
      <div style={container}>
        <h2 style={center}>Professional Services</h2>

        <div style={grid3}>
          {data.map((s, i) => {
            const ref = useRef<any>(null);
            useReveal(ref, i * 120);

            return (
              <div key={i} ref={ref} style={{ ...card, ...hidden }}>
                <h3>{s[0]}</h3>
                <p>{s[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE US ---------- */

function WhyChooseUs() {
  const data = [
    ["Structured Approach", "Clear systems & processes"],
    ["Timely Execution", "Deadlines always respected"],
    ["Compliance Focus", "Zero-risk compliance mindset"],
    ["Client-Centric", "Solutions tailored to needs"],
    ["Industry Experience", "Wide sector exposure"],
    ["Long-Term Relationships", "Built on trust"]
  ];

  return (
    <section style={dark}>
      <div style={container}>
        <h2 style={{ ...center, color: "#fff" }}>Why Choose Us</h2>

        <div style={grid3}>
          {data.map((s, i) => {
            const ref = useRef<any>(null);
            useReveal(ref, i * 120);

            return (
              <div key={i} ref={ref} style={{ ...darkCard, ...hidden }}>
                <h3>{s[0]}</h3>
                <p>{s[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- STYLES ---------- */

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px"
};

const hero = {
  background: "#2f536d",
  color: "#fff",
  textAlign: "center",
  padding: "120px 20px 100px"
};

const tag = { color: "#ff7a1a", letterSpacing: "2px" };

const title = { fontSize: "48px", margin: "15px 0" };

const subtitle = {
  maxWidth: "650px",
  margin: "auto",
  lineHeight: "1.6"
};

const btn = {
  background: "linear-gradient(135deg, #ff7a1a, #ff9d4d)",
  padding: "14px 30px",
  borderRadius: "10px",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

const stats = {
  background: "#2f536d",
  color: "#fff",
  padding: "100px 0 80px",
  textAlign: "center"
};

const light = {
  background: "#f5f7fa",
  padding: "80px 0"
};

const dark = {
  background: "#2f536d",
  padding: "80px 0"
};

const grid3 = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "25px",
  marginTop: "40px"
};

const statCard = {
  background: "rgba(255,255,255,0.05)",
  padding: "25px",
  borderRadius: "12px"
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.05)"
};

const darkCard = {
  background: "rgba(255,255,255,0.08)",
  padding: "20px",
  borderRadius: "12px",
  color: "#fff"
};

const center = { textAlign: "center" };