import { useState } from "react";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import WorkPlayToggle from "@/components/WorkPlayToggle";

const workProjects = [
  {
    title: "Transactions",
    description: "Improving payment journeys on Groww Pay.",
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransactions-mock.a80cdb3e.webp&w=3840&q=75",
    href: "https://vedantja.in/work/transactions",
  },
  {
    title: "Deep Dive (CIID & Spotify)",
    description: "Infinite discovery and depth.",
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspotify.9a23ae99.png&w=3840&q=75",
    href: "https://vedantja.in/project/spotify",
    isIcon: true,
  },
  {
    title: "QR Codes",
    description: "Foundations for personalisation on Groww.",
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fqr-mock.d0404493.webp&w=3840&q=75",
    href: "https://vedantja.in/work/qr",
  },
  {
    title: "Junta Quirks",
    description: "Experiments to understand Groww users.",
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjunta-mock.bef5bcc1.webp&w=3840&q=75",
    href: "https://vedantja.in/writing/junta-quirks",
  },
  {
    title: "UPI Lite",
    description: "Lightning fast payments on Groww Pay.",
    imageUrl: "https://vedantja.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupi-lite-mock.c37ff331.webp&w=3840&q=75",
    href: "https://vedantja.in/work/upi-lite",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<"work" | "play">("work");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@vedantja.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex flex-col text-sm justify-between text-neutral-800 no-scrollbar scroll-smooth gap-12 p-4 pb-12 sm:p-8 w-full sm:w-[800px] mx-auto relative">
      {/* Header */}
      <div className="w-full flex flex-col gap-8 z-10">
        <div className="flex flex-col gap-0">
          <h1 className="text-sm font-medium">Vedant</h1>
          <p className="text-neutral-400">Interaction Designer</p>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <p>
            I design and build interfaces with emerging technologies – digital or
            physical. Driven by radical ideas, I consistently challenge the status
            quo with my work.
          </p>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-3">
          <ExperienceItem
            years="2026 - Now"
            title="Leading design at"
            linkText="RinggAI"
            linkHref="https://ringg.ai/"
            description="Designing the future of voice agents."
          />
          <ExperienceItem
            years="2024 - 2025"
            title="Interaction Design at"
            linkText="CIID"
            linkHref="https://ciid.dk/"
            description="Prototypes blending the physical and the digital."
          />
          <ExperienceItem
            years="2021 – 2024"
            title="Product Design at"
            linkText="Groww"
            linkHref="https://www.ycombinator.com/companies/groww"
            description="Payments, Search, design systems"
          />
        </div>

        {/* Personal + Contact */}
        <div className="flex flex-col gap-1 w-full sm:max-w-[480px]">
          <p>
            I also{" "}
            <a className="blue-link" target="_blank" rel="noreferrer noopener" href="https://youtu.be/UD2VcSmGrSc?si=KFo0hNCVWOP9lIhT">
              film
            </a>
            ,{" "}
            <a className="blue-link" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/arcadefiredump">
              photograph
            </a>{" "}
            and{" "}
            <a className="blue-link" target="_blank" rel="noreferrer noopener" href="https://www.strava.com/athletes/ditherblue">
              run
            </a>
            .
          </p>
          <p>
            You can reach me at{" "}
            <a className="blue-link" href="https://x.com/ditherblue" target="_blank" rel="noreferrer noopener">
              @ditherblue
            </a>{" "}
            or hello@vedantja.in{" "}
            <button
              className="cursor-pointer blue-link"
              onClick={handleCopy}
            >
              ({copied ? "copied!" : "copy"})
            </button>
          </p>
        </div>
      </div>

      {/* Work/Play Toggle + Projects */}
      <div className="w-full flex flex-col gap-8">
        <WorkPlayToggle activeTab={activeTab} onTabChange={setActiveTab} />

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
          <a className="blue-link" target="_blank" rel="noreferrer noopener" href="https://youtu.be/UD2VcSmGrSc">
            youtube.com
          </a>
        </p>
        <p className="text-neutral-400">Updated in February 2026</p>
      </div>
    </main>
  );
};

export default Index;
