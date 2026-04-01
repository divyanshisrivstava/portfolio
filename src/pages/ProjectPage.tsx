import { useParams, useNavigate } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";

// Auto-discover all project pages at build time
const projectModules = import.meta.glob("@/content/project/*/page.tsx");

const availableSlugs = Object.keys(projectModules).map((path) => {
  const match = path.match(/\/content\/project\/([^/]+)\/page\.tsx$/);
  return match ? match[1] : null;
}).filter(Boolean) as string[];

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const Component = useMemo(() => {
    const key = Object.keys(projectModules).find((path) =>
      path.includes(`/content/project/${slug}/page.tsx`)
    );
    if (!key) return null;
    return lazy(projectModules[key] as () => Promise<{ default: React.ComponentType }>);
  }, [slug]);

  if (!Component) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-neutral-400">Project not found</p>
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

export { availableSlugs as availableProjects };
export default ProjectPage;
