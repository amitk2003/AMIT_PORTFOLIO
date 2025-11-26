export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between">
        <p>© {new Date().getFullYear()} Amit Kumar</p>
        <p>Built with Next.js + TypeScript</p>
      </div>
    </footer>
  );
}
