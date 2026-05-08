// Auto-discover all project components using Vite's import.meta.glob
// To add a new project: create a folder in src/content/project/[name]/index.tsx

const projectModules = import.meta.glob<{ default: React.ComponentType }>(
  './*/index.tsx'
);

export interface ProjectEntry {
  slug: string;
  load: () => Promise<{ default: React.ComponentType }>;
}

export const getProjectSlugs = (): string[] => {
  return Object.keys(projectModules).map((path) => {
    const match = path.match(/\.\/(.+)\/index\.tsx$/);
    return match ? match[1] : '';
  }).filter(Boolean);
};

export const getProjectLoader = (slug: string) => {
  const key = `./${slug}/index.tsx`;
  return projectModules[key] || null;
};
