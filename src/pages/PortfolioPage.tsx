import { useParams, useNavigate } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";

// Auto-discover all portfolio pages at build time
const portfolioModules = import.meta.glob("@/content/portfolio/*/page.tsx");

const availableSlugs = Object.keys(portfolioModules).map((path) => {
  const match = path.match(/\/content\/portfolio\/([^/]+)\/page\.tsx$/);
  return match ? match[1] : null;
}).filter(Boolean) as string[];

const PortfolioPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const Component = useMemo(() => {
    const key = Object.keys(portfolioModules).find((path) =>
      path.includes(`/content/portfolio/${slug}/page.tsx`)
    );
    if (!key) return null;
    return lazy(portfolioModules[key] as () => Promise<{ default: React.ComponentType }>);
  }, [slug]);

  if (!Component) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-neutral-400">Portfolio not found</p>
          <button onClick={() => navigate("/")} className="text-blue-500 underline hover:text-blue-600">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-neutral-400">Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export { availableSlugs as availablePortfolios };
export default PortfolioPage;
