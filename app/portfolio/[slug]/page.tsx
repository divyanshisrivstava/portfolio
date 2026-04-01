import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

async function getPortfolioComponent(slug: string) {
  const portfolioPath = path.join(process.cwd(), "content", "portfolio", slug);
  
  if (!fs.existsSync(portfolioPath)) {
    return null;
  }

  try {
    const PortfolioComponent = await import(`@/content/portfolio/${slug}/page`);
    return PortfolioComponent.default;
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const portfoliosPath = path.join(process.cwd(), "content", "portfolio");
  
  if (!fs.existsSync(portfoliosPath)) {
    return [];
  }

  const folders = fs.readdirSync(portfoliosPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({ slug: dirent.name }));

  return folders;
}

export default async function PortfolioPage({ params }: { params: { slug: string } }) {
  const Component = await getPortfolioComponent(params.slug);
  
  if (!Component) {
    notFound();
  }

  return <Component />;
}
