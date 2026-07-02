export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-xs text-gray-600">Built with React, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
}
