export default function Footer() {
  return (
    <footer style={{
      background: "#0f2a44",
      color: "#ffffff",
      padding: "60px 20px 20px"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: "40px"
      }}>
        
        {/* LEFT */}
        <div>
          <h2 style={{marginBottom:"10px"}}>DRKG & Co.</h2>
          <p style={{opacity:0.8}}>Chartered Accountants</p>

          <p style={{marginTop:"20px", lineHeight:"1.6"}}>
            103, Corporate Avenue, Near Jain Temple,<br/>
            Timaliyawad, Nanpura,<br/>
            Surat – 395001
          </p>

          <p style={{marginTop:"10px"}}>📞 +91 98980 89964</p>
          <p>✉ cakomal4@yahoo.com</p>
        </div>

        {/* RIGHT */}
        <div>
          <h3>Quick Links</h3>
          <ul style={{listStyle:"none", padding:0, marginTop:"10px"}}>
            <li><a href="/" style={{color:"#fff"}}>Home</a></li>
            <li><a href="/about" style={{color:"#fff"}}>About</a></li>
            <li><a href="/services" style={{color:"#fff"}}>Services</a></li>
            <li><a href="/contact" style={{color:"#fff"}}>Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{
        marginTop:"40px",
        fontSize:"12px",
        opacity:0.7,
        maxWidth:"1200px",
        marginInline:"auto"
      }}>
        Disclaimer: This website is for informational purposes only and does not constitute professional advice.
      </div>

      {/* Bottom */}
      <div style={{
        marginTop:"20px",
        textAlign:"center",
        fontSize:"12px",
        opacity:0.6
      }}>
        © 2026 DRKG & Co. All rights reserved.
      </div>
    </footer>
  );
}
