export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 px-6 py-8 dark:border-white/10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Ayush Jain. Crafted with care.
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Built with React, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
}
