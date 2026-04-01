// Example project: rareware
// Replace this with your actual project page component

import { Link } from "react-router-dom";

const RarewareProject = () => (
  <main className="flex flex-col text-sm text-neutral-800 gap-10 px-5 py-8 w-full max-w-[800px] mx-auto">
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-sm font-medium">Rareware</h1>
        <p className="text-neutral-400">Project details page</p>
      </div>
      <Link to="/" className="text-xs text-blue-600 underline">← Home</Link>
    </div>
    <p className="text-neutral-400">
      Drop your project content here. Replace this file with your own design.
    </p>
  </main>
);

export default RarewareProject;
