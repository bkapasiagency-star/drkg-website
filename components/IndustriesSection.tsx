const industries = [
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🏪', name: 'Retail & Trading' },
  { icon: '🏗️', name: 'Construction' },
  { icon: '💊', name: 'Pharmaceuticals' },
  { icon: '🏦', name: 'Banking & Finance' },
  { icon: '💻', name: 'IT & Technology' },
  { icon: '📦', name: 'Logistics' },
  { icon: '🎓', name: 'Education & NGOs' },
]

export default function IndustriesSection() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Sectors</div>
        <h2 className="font-serif text-4xl font-semibold text-navy leading-tight mb-4">Industries Served</h2>
        <p className="text-gray-500 max-w-lg leading-relaxed">
          The firm has served clients across a diverse range of industries and entity types over the years.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(i => (
            <div
              key={i.name}
              className="bg-white border border-gray-200 hover:border-gold/50 rounded-md p-5 text-center transition-all hover:shadow-sm group"
            >
              <div className="text-2xl mb-2.5">{i.icon}</div>
              <div className="text-sm font-medium text-gray-600">{i.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
