interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  isIcon?: boolean;
}

const ProjectCard = ({ title, description, imageUrl, href, isIcon }: ProjectCardProps) => (
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
    </div>
    <div className="flex flex-col gap-0">
      <h1 className="text-sm font-medium">{title}</h1>
      <p className="text-neutral-400">{description}</p>
    </div>
  </a>
);

export default ProjectCard;
