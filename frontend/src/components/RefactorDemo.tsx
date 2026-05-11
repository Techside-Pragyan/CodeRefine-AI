"use client";

import { useState } from 'react';

export default function RefactorDemo() {
  const [code, setCode] = useState('// Paste your code here\nfunction sum(a, b) {\n  return a + b;\n}');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleRefactor = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/refactor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language: 'javascript' }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Refactoring failed:', error);
      alert('Failed to connect to backend. Make sure the server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Try it Live</h2>
        <p className="text-zinc-400">Experience the power of AI-driven refactoring in real-time.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
        {/* Input Area */}
        <div className="glass-card flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Input Code</span>
            <button 
              onClick={handleRefactor}
              disabled={loading}
              className="btn-primary py-1.5 px-4 text-xs"
            >
              {loading ? 'Refactoring...' : 'Refactor Now'}
            </button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 bg-transparent p-6 font-mono text-sm outline-none resize-none text-zinc-300"
            spellCheck={false}
          />
        </div>

        {/* Output Area */}
        <div className="glass-card flex flex-col overflow-hidden bg-blue-500/5 border-blue-500/20">
          <div className="p-4 border-b border-white/5 bg-white/5 flex items-center">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">AI Suggestion</span>
          </div>
          <div className="flex-1 overflow-auto p-6">
            {result ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-zinc-500 uppercase mb-3">Refactored Code</h4>
                  <pre className="bg-black/40 p-4 rounded-xl text-sm font-mono text-green-400 overflow-x-auto">
                    <code>{result.refactoredCode}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-500 uppercase mb-3">Improvements</h4>
                  <ul className="space-y-2">
                    {result.improvements?.map((imp: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                        <span className="text-blue-500 mt-1">✦</span>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-500 uppercase mb-3">Explanation</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed italic">
                    "{result.explanation}"
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-zinc-600">
                <svg className="w-12 h-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-sm">Click "Refactor Now" to see AI improvements</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
