export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-8 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Introducing CodeRefine v1.0
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-[1.1]">
        Refine your code with the <br />
        <span className="glow-text">Intelligence of AI.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
        The ultimate engine for automated code reviews, refactoring, and performance optimization. 
        Write cleaner, faster, and more secure code in seconds.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button className="btn-primary flex items-center gap-2 group">
          Start Refactoring
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <button className="btn-secondary">View Documentation</button>
      </div>

      <div className="mt-20 w-full max-w-5xl aspect-video glass-card overflow-hidden shadow-2xl relative animate-float">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <div className="p-4 border-b border-white/5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-[10px] text-zinc-500 font-mono ml-4">refactor-demo.ts</div>
        </div>
        <div className="p-8 font-mono text-sm text-zinc-300">
          <pre className="text-left">
            <code>
              {`// AI is analyzing your code...\n\nfunction calculateTotal(items) {\n  let total = 0;\n  for (let i = 0; i < items.length; i++) {\n    total += items[i].price;\n  }\n  return total;\n}\n\n// SUGGESTION: Use array.reduce() for cleaner code.\nconst calculateTotal = (items) => \n  items.reduce((acc, item) => acc + item.price, 0);`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
