const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground">About</h2>
          </div>
          <div className="space-y-4 text-[15px] text-muted-foreground leading-[1.7]">
            <p>
              Building production software across fintech, SaaS, and e-commerce.
              I work best when the problem is complex and the stakes are high.
            </p>
            <p>
              I specialize in full-stack TypeScript — React on the front, Node.js on the back,
              PostgreSQL underneath. I care about performance, accessibility, and shipping code
              that other developers can actually maintain.
            </p>
            <p>
              I've worked with early-stage startups and established companies alike.
              Whether it's building from zero or scaling what exists, I bring the same
              standard: clean architecture, clear communication, and delivered results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
