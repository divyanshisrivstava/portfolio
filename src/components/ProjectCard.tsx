import PhoneMockup from "./PhoneMockup";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  href: string;
  isIcon?: boolean;
}

const ProjectCard = ({ title, description, tech, imageUrl, href, isIcon }: ProjectCardProps) => (
  <div className="w-full flex flex-col gap-4 group">
    <div className="w-full bg-neutral-50 rounded-lg p-6 flex items-center justify-center">
      <PhoneMockup url={href} title={title} fallbackImage={imageUrl} isIcon={isIcon} />
    </div>
    <div className="flex flex-col gap-1">
      <h1 className="text-sm font-medium">{title}</h1>
      <p className="text-neutral-400 text-sm">{description}</p>
      <div className="mt-1 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-medium px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
