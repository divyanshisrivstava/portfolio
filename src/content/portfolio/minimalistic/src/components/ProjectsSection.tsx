const projects = [
  {
    title: "Paystream",
    problem: "Legacy payment processing was costing a fintech client 40+ engineering hours per month in maintenance.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe API", "Redis"],
    outcome: "Reduced payment failures by 68%. Cut maintenance overhead to under 5 hours/month.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Warehouse OS",
    problem: "A logistics company managed inventory across 3 warehouses using spreadsheets. Errors and delays were constant.",
    tech: ["Next.js", "TypeScript", "Prisma", "AWS", "WebSockets"],
    outcome: "Real-time inventory sync across all locations. Order processing time dropped from 12 minutes to 90 seconds.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "LearnTrack",
    problem: "An edtech startup needed an LMS that could handle 50K+ concurrent users without degradation.",
    tech: ["React", "Go", "PostgreSQL", "Docker", "CloudFront"],
    outcome: "Sustained 60K concurrent users in load tests. 99.97% uptime over 6 months.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ClientHub CRM",
    problem: "A consulting firm tracked client relationships across email, Slack, and sticky notes.",
    tech: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind"],
    outcome: "Centralized 2,000+ client touchpoints. Team reported saving 10 hours/week on admin.",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Selected Work</h2>
            <p className="mt-2 text-[15px] text-muted-foreground">
              A mix of client projects and products I've built.
            </p>
          </div>
          <div className="space-y-0 divide-y divide-border/60">
            {projects.map((project, i) => (
              <article key={project.title} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground font-heading">
                    {project.title}
                  </h3>
                  <span className="text-[11px] text-muted-foreground font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 bg-secondary text-muted-foreground rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[14px] font-medium text-foreground">
                  ↳ {project.outcome}
                </p>
                <div className="mt-3 flex gap-4 text-[13px]">
                  <a href={project.liveUrl} className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors duration-200">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors duration-200">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
