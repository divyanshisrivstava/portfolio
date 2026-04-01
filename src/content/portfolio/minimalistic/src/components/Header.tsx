const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "https://resume-dev-miracneroid.netlify.app", external: true }
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <nav className="max-w-5xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="#" className="font-heading text-base font-semibold text-foreground tracking-tight">
          AS
        </a>
        <ul className="hidden sm:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-[13px] font-medium bg-foreground text-background px-4 py-1.5 rounded hover:bg-foreground/90 transition-colors duration-200"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
};

export default Header;
