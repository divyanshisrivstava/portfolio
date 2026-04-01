import { useState, useEffect } from "react";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import WorkPlayToggle from "@/components/WorkPlayToggle";
import { useToast } from "@/hooks/use-toast";
import Cal, { getCalApi } from "@calcom/embed-react";

const workProjects = [
  {
    title: "Rareware",
    description: "Developing scalable web platforms for businesses.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe API", "Redis"],
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransactions-mock.a80cdb3e.webp&w=3840&q=75",
    href: "https://vedantja.in/work/transactions",
  },
  {
    title: "Paystream",
    description: "Improving payment infrastructure for fintech platforms.",
    tech: ["Next.js", "TypeScript", "Prisma", "AWS", "WebSockets"],
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspotify.9a23ae99.png&w=3840&q=75",
    href: "https://vedantja.in/project/spotify",
    isIcon: true,
  },
  {
    title: "Puzzle RDP",
    description: "Optimizing infrastructure for remote desktop platforms.",
    tech: ["React", "Go", "PostgreSQL", "Docker", "CloudFront"],
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fqr-mock.d0404493.webp&w=3840&q=75",
    href: "https://vedantja.in/work/qr",
  },
  {
    title: "Warehouse OS",
    description: "Streamlining real-time inventory operations for logistics.",
    tech: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind"],
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjunta-mock.bef5bcc1.webp&w=3840&q=75",
    href: "https://vedantja.in/writing/junta-quirks",
  },
  {
    title: "LearnTrack",
    description: "Scaling edtech platforms for seamless learning experiences.",
    tech: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind"],
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupi-lite-mock.c37ff331.webp&w=3840&q=75",
    href: "https://vedantja.in/work/upi-lite",
  },
  {
    title: "ClientHub CRM",
    description: "Centralizing client workflows for better team efficiency.",
    tech: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind"],
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupi-lite-mock.c37ff331.webp&w=3840&q=75",
    href: "https://vedantja.in/work/upi-lite",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<"work" | "play">("work");
  const [copied, setCopied] = useState(false);
  const [runOriginalRect, setRunOriginalRect] = useState<DOMRect | null>(null);
  const [runPosition, setRunPosition] = useState({ x: 0, y: 0 });
  const [isRunEscaping, setIsRunEscaping] = useState(false);
  const { toast, dismiss } = useToast();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { 
        hideEventTypeDetails: false, 
        layout: "month_view",
        styles: {
          branding: { brandColor: "#000000" }
        }
      });
    })();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("ayushsriavstava@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetInTouch = () => {
    toast({
      title: "",
      description: (
        <div className="w-full">
          <div className="flex items-start justify-between mb-4 px-6 pt-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Book a call or reach out via email
              </p>
            </div>
            <a
              href="mailto:ayushsriavstava@gmail.com"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 mt-1"
            >
              ayushsriavstava@gmail.com
            </a>
          </div>
          <div className="bg-background overflow-hidden pb-4" style={{ height: "550px" }}>
            <Cal
              namespace="30min"
              calLink="miracneroid/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ 
                layout: "month_view",
                theme: "light"
              }}
            />
          </div>
        </div>
      ),
    });
  };

  const handleConsult = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast({
      title: "",
      description: (
        <div className="w-full">
          <div className="flex items-start justify-between mb-4 px-6 pt-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Consult</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Book a call or reach out via email
              </p>
            </div>
            <a
              href="mailto:ayushsriavstava@gmail.com"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 mt-1"
            >
              ayushsriavstava@gmail.com
            </a>
          </div>
          <div className="bg-background overflow-hidden pb-4" style={{ height: "550px" }}>
            <Cal
              namespace="30min"
              calLink="miracneroid/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ 
                layout: "month_view",
                theme: "light"
              }}
            />
          </div>
        </div>
      ),
    });
  };

  const handleRunHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    
    if (!isRunEscaping) {
      setRunOriginalRect(rect);
    }
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Flee away from mouse cursor
    const dx = centerX - mouseX;
    const dy = centerY - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const flee = 80 + Math.random() * 40;
    
    // Clamp within viewport
    const newX = Math.max(20, Math.min(window.innerWidth - 40, centerX + (dx / dist) * flee));
    const newY = Math.max(20, Math.min(window.innerHeight - 30, centerY + (dy / dist) * flee));
    
    setRunPosition({ x: newX, y: newY });
    setIsRunEscaping(true);
  };

  const handleMouseLeaveArea = () => {
    setIsRunEscaping(false);
    setRunPosition({ x: 0, y: 0 });
    setRunOriginalRect(null);
  };

  return (
    <main className="flex flex-col text-sm justify-between text-neutral-800 no-scrollbar scroll-smooth gap-10 sm:gap-12 px-5 py-8 sm:p-8 w-full max-w-[800px] mx-auto relative">
      {/* Header */}
      <div className="w-full flex flex-col gap-6 sm:gap-8 z-10">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-0">
            <h1 className="text-sm font-medium">Ayush</h1>
            <p className="text-neutral-400">Product Engineer</p>
          </div>
          <button
            onClick={handleGetInTouch}
            className="text-xs px-3 py-1.5 border border-neutral-200 rounded hover:bg-neutral-50 transition-colors duration-200"
          >
            Get in touch
          </button>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <p>
            I build reliable, scalable applications & systems for businesses that need things done right. From complex backends to polished interfaces — I focus on solving real problems with clean, maintainable code.
          </p>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-3">
          <ExperienceItem
            years="2025 - Now"
            title="Full Stack Developer"
            linkText="RareWare"
            linkHref="https://rarewareshop.com/"
            description="Building end-to-end web products for growing businesses."
          />
          <ExperienceItem
            years="2024 - 2025"
            title="Full Stack Developer"
            linkText="Puzzle RDP"
            linkHref="https://eduskillsfoundation.org/"
            description="Developed cloud infrastructure for high-traffic systems."
          />
          <ExperienceItem
            years="Mar - Jun 2024"
            title="Web Development Intern"
            linkText="TripFox Travellers"
            linkHref="https://www.indiamart.com/tripfox-travellers/"
            description="Building real-time booking systems at scale."
          />
        </div>

        {/* Personal + Contact */}
        <div className="flex flex-col gap-1 w-full sm:max-w-[480px] relative" onMouseLeave={handleMouseLeaveArea}>
          <p>
            I also{" "}
            <a className="blue-link" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/watch?v=dw9RxwBmZl4">
              teach
            </a>
            ,{" "}
            <a className="blue-link cursor-pointer" onClick={handleConsult}>
              consult
            </a>{" "}
            and{" "}
            <a 
              className="blue-link cursor-pointer"
              onMouseEnter={handleRunHover}
              onClick={handleRunHover}
              style={isRunEscaping ? { 
                position: 'fixed',
                left: `${runPosition.x}px`, 
                top: `${runPosition.y}px`,
                transition: 'left 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), top 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                zIndex: 50,
              } : {}}
            >
              run
            </a>
            .
          </p>
          <p>
            Find me on{" "}
            <a className="blue-link" href="https://github.com/miracneroid" target="_blank" rel="noreferrer noopener">
              github
            </a>{" "},{" "}
            <a className="blue-link" href="https://x.com/miracneroid" target="_blank" rel="noreferrer noopener">
              twitter
            </a>{" "}, or{" "}
            <a className="blue-link" href="https://www.linkedin.com/in/miracneroid/" target="_blank" rel="noreferrer noopener">
              linkedin
            </a>.
          </p>
        </div>
      </div>

      {/* Work/Play Toggle + Projects */}
      <div className="w-full flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <WorkPlayToggle activeTab={activeTab} onTabChange={setActiveTab} />
          <a
            href="https://resume-dev-miracneroid.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs px-3 py-1.5 border border-neutral-200 rounded hover:bg-neutral-50 transition-colors duration-200"
          >
            Résumé
          </a>
        </div>

        <div className="w-full flex flex-col gap-8">
          {activeTab === "work" &&
            workProjects.map((project) => (
              <div key={project.title} style={{ opacity: 1, transform: "none" }}>
                <ProjectCard {...project} />
              </div>
            ))}
          {activeTab === "play" && (
            <p className="text-neutral-400">Play projects coming soon.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-neutral-400 w-full sm:w-128 flex flex-col gap-1 z-10">
        <p>
          If you have some time:{" "}
          <a className="blue-link" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/@miracneroid">
            youtube.com
          </a>
        </p>
        <p className="text-neutral-400">Updated in April 2026</p>
      </div>
    </main>
  );
};

export default Index;
