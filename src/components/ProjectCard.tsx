import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  href: string;
  isIcon?: boolean;
}

const ProjectCard = ({ title, description, tech, imageUrl, href, isIcon }: ProjectCardProps) => (
  <a className="w-full flex flex-col gap-2 group" href={href} target="_blank" rel="noreferrer noopener">
    <div className="w-full aspect-video bg-neutral-100 overflow-hidden rounded relative flex items-center justify-center">
      {isIcon ? (
        <img
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-24 h-24 object-contain object-center p-4"
          src={imageUrl}
        />
      ) : (
        <img
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain object-center p-4 absolute inset-0"
          src={imageUrl}
        />
      )}
      <div className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full shadow-sm group-hover:bg-white transition-colors">
        <ExternalLink className="w-3 h-3 text-neutral-600" />
      </div>
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
  </a>
);

export default ProjectCard;
