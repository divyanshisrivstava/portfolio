import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectLoader, getProjectSlugs } from "@/content/project/registry";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) { setError(true); setLoading(false); return; }

    const loader = getProjectLoader(slug);
    if (!loader) {
      setError(true);
      setLoading(false);
      return;
    }

    loader()
      .then((mod) => { setComponent(() => mod.default); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (error || !Component) {
    const available = getProjectSlugs();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-5">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="text-muted-foreground">No project exists at <code>/project/{slug}</code></p>
        {available.length > 0 && (
          <div className="mt-4 text-sm">
            <p className="text-muted-foreground mb-2">Available projects:</p>
            <ul className="space-y-1">
              {available.map((s) => (
                <li key={s}>
                  <Link to={`/project/${s}`} className="text-blue-600 underline">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link to="/" className="mt-4 text-blue-600 underline text-sm">← Back home</Link>
      </div>
    );
  }

  return <Component />;
};

export default ProjectPage;
