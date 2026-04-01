export default function PaystreamProject() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Paystream</h1>
        <p className="text-gray-600 mb-6">
          Improving payment infrastructure for fintech platforms.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <div className="flex gap-2 flex-wrap">
              {["Next.js", "TypeScript", "Prisma", "AWS", "WebSockets"].map(tech => (
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
