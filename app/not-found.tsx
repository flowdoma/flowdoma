import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-mono text-[#00E5FF] text-xs tracking-widest uppercase mb-4">404</p>
        <h1 className="font-display text-6xl font-bold gradient-text-warm mb-4">Page not found</h1>
        <p className="text-[#8896A7] mb-8 max-w-sm mx-auto">
          This page doesn't exist or was moved. Let's get you back on track.
        </p>
        <Link href="/" className="btn-primary px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2">
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
