import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        
        {/* Sticky Navbar */}
        <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
          <Navbar />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}