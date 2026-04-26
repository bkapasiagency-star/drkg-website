"use client";

import { useEffect, useRef } from "react";
import { CSSProperties } from "react";

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
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, delay]);
}

const hidden: CSSProperties = {
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

/* ---------- KOMAL SECTION ---------- */

function KomalSection() {
  const ref = useRef<any>(null);
  useReveal(ref);

  return (
    <section style={light}>
      <div style={{ ...container, ...grid2 }} ref={ref}>
        
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="CA Komal"
          style={image}
        />

        <div>
          <h2>CA Komal Bhavnagari</h2>

          <p style={{ color: "#ff7a1a", margin: "10px 0" }}>
            13+ Years • 1000+ Clients • 30+ Industries
          </p>

          <p style={para}>
            CA Komal Bhavnagari holds qualifications of B.Com., LL.B., and F.C.A.,
            with 13+ years of experience in taxation, accounting, and audit.
          </p>

          <p style={para}>
            She has served clients across multiple industries with a strong focus
            on compliance and structured execution.
          </p>

          <p style={quote}>
            “Our focus is not just compliance — it is financial clarity.”
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */

function Services() {
  const data = [
    ["Taxation Services", "Strategic tax planning"],
    ["Audit & Assurance", "Reliable audits"],
    ["GST & Compliance", "GST solutions"],
    ["Accounting", "Financial management"],
    ["Project Finance", "Funding support"],
    ["Bank Audits", "Professional audits"]
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
    ["Structured Approach", "Clear systems"],
    ["Timely Execution", "On-time delivery"],
    ["Compliance Focus", "Zero risk"],
    ["Client-Centric", "Custom solutions"],
    ["Industry Experience", "Wide exposure"],
    ["Trust", "Long-term relationships"]
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

const container: CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px"
};

const hero: CSSProperties = {
  background: "#2f536d",
  color: "#fff",
  textAlign: "center",
  padding: "120px 20px 100px"
};

const tag: CSSProperties = {
  color: "#ff7a1a",
  letterSpacing: "2px"
};

const title: CSSProperties = {
  fontSize: "48px",
  margin: "15px 0"
};

const subtitle: CSSProperties = {
  maxWidth: "650px",
  margin: "auto",
  lineHeight: "1.6"
};

const btn: CSSProperties = {
  background: "linear-gradient(135deg, #ff7a1a, #ff9d4d)",
  padding: "14px 30px",
  borderRadius: "10px",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

const stats: CSSProperties = {
  background: "#2f536d",
  color: "#fff",
  padding: "100px 0 80px",
  textAlign: "center"
};

const light: CSSProperties = {
  background: "#f5f7fa",
  padding: "80px 0"
};

const dark: CSSProperties = {
  background: "#2f536d",
  padding: "80px 0"
};

const grid3: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "25px",
  marginTop: "40px"
};

const grid2: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
  alignItems: "center"
};

const statCard: CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  padding: "25px",
  borderRadius: "12px"
};

const card: CSSProperties = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px"
};

const darkCard: CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  padding: "20px",
  borderRadius: "12px",
  color: "#fff"
};

const center: CSSProperties = {
  textAlign: "center"
};

const para: CSSProperties = {
  lineHeight: "1.7",
  marginTop: "10px"
};

const quote: CSSProperties = {
  marginTop: "15px",
  fontStyle: "italic",
  color: "#555"
};

const image: CSSProperties = {
  width: "100%",
  borderRadius: "16px",
  objectFit: "cover"
};