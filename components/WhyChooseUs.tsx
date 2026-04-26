export default function WhyChooseUs() {
  const points = [
    "13+ Years Experience",
    "ICAI Compliant",
    "Trusted by 1000+ Clients",
    "Accurate & Timely Service"
  ];

  return (
    <section className="fade-in" style={{ padding: '80px 20px', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px' }}>
          Why Choose Us
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
          gap: '20px',
          marginTop: '40px'
        }}>
          {points.map((point, i) => (
            <div key={i} className="card" style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px'
            }}>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}