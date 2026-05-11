import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/20 border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg shadow-blue-500/20" />
        <span className="text-xl font-bold tracking-tight text-white">CodeRefine<span className="text-blue-500">AI</span></span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <Link href="#features" className="hover:text-white transition-colors">Features</Link>
        <Link href="#demo" className="hover:text-white transition-colors">Demo</Link>
        <Link href="#docs" className="hover:text-white transition-colors">Docs</Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Log in</button>
        <button className="btn-primary text-sm py-2">Get Started</button>
      </div>
    </header>
  );
}
