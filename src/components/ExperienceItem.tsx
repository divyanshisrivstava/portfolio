interface ExperienceItemProps {
  years: string;
  title: string;
  linkText: string;
  linkHref: string;
  description: string;
}

const ExperienceItem = ({ years, title, linkText, linkHref, description }: ExperienceItemProps) => (
  <div className="flex flex-row gap-4 w-full">
    <p className="text-neutral-400 w-32 shrink-0">{years}</p>
    <div className="flex flex-col gap-0 w-full">
      <h3 className="text-sm font-medium">
        {title}{" "}
        <a className="blue-link" target="_blank" rel="noreferrer noopener" href={linkHref}>
          {linkText}
        </a>
      </h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  </div>
);

export default ExperienceItem;
