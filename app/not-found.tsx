import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 mb-8">Page not found</p>
        <Link 
          href="/" 
          className="text-sm px-4 py-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
