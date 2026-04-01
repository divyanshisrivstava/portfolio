const HeroSection = () => {
  const avatars = [
    "/my-avatar-1.png",
    "/my-avatar-2.png",
    "/my-avatar-3.png",
    "/my-avatar-4.png",
  ];

  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Profile Picture - shows first on mobile, right on desktop */}
        <div className="flex-shrink-0 order-first lg:order-last">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden ring-2 ring-border/80 shadow-lg">
            <img
              src={randomAvatar}
              alt="Ayush Srivastava"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-[12px] sm:text-[13px] font-medium text-muted-foreground uppercase tracking-widest mb-3 sm:mb-4">
            Custom Software & Gen AI Developer
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
            Ayush Srivastava
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            I build reliable, scalable applications & systems for businesses that need things done right.
            From complex backends to polished interfaces — I focus on solving real problems
            with clean, maintainable code.
          </p>
          <div className="mt-6 sm:mt-8 flex gap-3 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-2 text-[13px] font-medium bg-foreground text-background rounded hover:bg-foreground/90 transition-colors duration-200"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2 text-[13px] font-medium border border-border text-foreground rounded hover:bg-secondary transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
