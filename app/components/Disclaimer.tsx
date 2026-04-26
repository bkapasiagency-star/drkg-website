export default function Disclaimer() {
  return (
    <section style={{
      background: '#f8fafc',
      padding: '40px 20px',
      fontSize: '13px',
      color: '#64748b',
      textAlign: 'center',
      borderTop: '1px solid #e2e8f0'
    }}>
      <div style={{ maxWidth: '900px', margin: 'auto' }}>
        <p>
          This website is intended solely for informational purposes. It does not
          constitute professional advice or a solicitation of services. The
          information provided herein is general in nature and may not be
          applicable to specific situations.
        </p>

        <p style={{ marginTop: '10px' }}>
          Users are advised to seek appropriate professional advice before acting
          on any information contained on this website.
        </p>
      </div>
    </section>
  )
}