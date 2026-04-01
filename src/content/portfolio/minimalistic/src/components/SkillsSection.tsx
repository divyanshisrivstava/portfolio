const categories = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "Go", "GraphQL", "REST APIs", "Prisma"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    label: "Infrastructure & Tools",
    skills: ["AWS", "Docker", "CI/CD", "Git", "Linux", "Vercel"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground mb-3">
                  {cat.label}
                </h3>
                <ul className="space-y-1.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-[14px] text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
