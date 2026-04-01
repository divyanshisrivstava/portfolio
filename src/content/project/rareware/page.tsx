export default function RarewareProject() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Rareware</h1>
        <p className="text-gray-600 mb-6">
          Developing scalable web platforms for businesses.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <div className="flex gap-2 flex-wrap">
              {["React", "Node.js", "PostgreSQL", "Stripe API", "Redis"].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
