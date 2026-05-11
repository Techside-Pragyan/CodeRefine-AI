import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <div className="bg-mesh" />
      <Header />
      <main>
        <Hero />
        
        {/* Additional sections can be added here */}
        <section id="features" className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Instant Refactoring</h3>
            <p className="text-zinc-400 leading-relaxed">
              Analyze and refactor entire directories in seconds. Maintain consistency across your codebase automatically.
            </p>
          </div>

          <div className="glass-card p-8 hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Security Audits</h3>
            <p className="text-zinc-400 leading-relaxed">
              Identify potential vulnerabilities and security flaws before they reach production. Stay protected.
            </p>
          </div>

          <div className="glass-card p-8 hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Performance Ops</h3>
            <p className="text-zinc-400 leading-relaxed">
              Optimize code execution time and resource consumption with AI-driven performance suggestions.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 px-8 border-t border-white/5 text-center text-sm text-zinc-500">
        &copy; 2026 CodeRefine-AI. All rights reserved. Built with passion for developers.
      </footer>
    </div>
  );
}
