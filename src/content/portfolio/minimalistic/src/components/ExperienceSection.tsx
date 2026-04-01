const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Meridian Systems",
    period: "2022 – Present",
    impact: "Led architecture for a payment platform processing $4M+/month. Reduced API latency by 45%.",
  },
  {
    role: "Full Stack Developer",
    company: "Stackline Labs",
    period: "2020 – 2022",
    impact: "Built and shipped 3 SaaS products from concept to production. Managed a team of 4 engineers.",
  },
  {
    role: "Frontend Developer",
    company: "Brightpath Digital",
    period: "2018 – 2020",
    impact: "Rebuilt client-facing dashboard used by 12K+ daily active users. Improved load time by 60%.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          </div>
          <div className="space-y-0 divide-y divide-border/60">
            {experiences.map((exp) => (
              <div key={exp.company} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0">
                <div className="sm:w-36 shrink-0">
                  <span className="text-[13px] text-muted-foreground font-mono">{exp.period}</span>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground font-heading">
                    {exp.role}
                  </h3>
                  <p className="text-[13px] text-muted-foreground mt-0.5">{exp.company}</p>
                  <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">
                    {exp.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
