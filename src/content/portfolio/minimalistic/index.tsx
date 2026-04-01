// Example portfolio: minimalistic
// Replace this with your actual portfolio component

import { Link } from "react-router-dom";

const MinimalisticPortfolio = () => (
  <main className="flex flex-col text-sm text-neutral-800 gap-10 px-5 py-8 w-full max-w-[800px] mx-auto">
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-sm font-medium">Minimalistic Portfolio</h1>
        <p className="text-neutral-400">A clean, minimal layout</p>
      </div>
      <Link to="/" className="text-xs text-blue-600 underline">← Home</Link>
    </div>
    <p className="text-neutral-400">
      Drop your portfolio content here. Replace this file with your own design.
    </p>
  </main>
);

export default MinimalisticPortfolio;
