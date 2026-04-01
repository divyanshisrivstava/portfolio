import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

async function getProjectComponent(slug: string) {
  const projectPath = path.join(process.cwd(), "content", "project", slug);
  
  if (!fs.existsSync(projectPath)) {
    return null;
  }

  try {
    const ProjectComponent = await import(`@/content/project/${slug}/page`);
    return ProjectComponent.default;
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const projectsPath = path.join(process.cwd(), "content", "project");
  
  if (!fs.existsSync(projectsPath)) {
    return [];
  }

  const folders = fs.readdirSync(projectsPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({ slug: dirent.name }));

  return folders;
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const Component = await getProjectComponent(params.slug);
  
  if (!Component) {
    notFound();
  }

  return <Component />;
}
