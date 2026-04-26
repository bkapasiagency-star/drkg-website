"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919898089964"
      target="_blank"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "#fff",
        padding: "14px 16px",
        borderRadius: "50%",
        fontSize: "20px",
        textDecoration: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        zIndex: 999,
      }}
    >
      💬
    </a>
  );
}