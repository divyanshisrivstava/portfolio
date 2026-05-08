// Auto-discover all portfolio components using Vite's import.meta.glob
// To add a new portfolio: create a folder in src/content/portfolio/[name]/index.tsx

const portfolioModules = import.meta.glob<{ default: React.ComponentType }>(
  './*/index.tsx'
);

export interface PortfolioEntry {
  slug: string;
  load: () => Promise<{ default: React.ComponentType }>;
}

export const getPortfolioSlugs = (): string[] => {
  return Object.keys(portfolioModules).map((path) => {
    const match = path.match(/\.\/(.+)\/index\.tsx$/);
    return match ? match[1] : '';
  }).filter(Boolean);
};

export const getPortfolioLoader = (slug: string) => {
  const key = `./${slug}/index.tsx`;
  return portfolioModules[key] || null;
};
