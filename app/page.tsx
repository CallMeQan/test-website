export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-black text-cyber-green p-8">
      {/* Header/Terminal */}
      <header className="mb-12">
        <div className="border-2 border-cyber-green p-6 cyber-card">
          <div className="flex items-center gap-3 mb-4">
            <span className="status-online"></span>
            <span className="text-sm uppercase tracking-wider">System Online</span>
          </div>
          <h1 className="text-5xl font-bold mb-2 neon-glow">
            &gt; CYBERPUNK_PORTFOLIO<span className="cursor">_</span>
          </h1>
          <p className="text-xl opacity-80 font-mono">
            :: Terminal Interface v2.0.77 ::
          </p>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* About Section */}
        <section className="cyber-card">
          <h2 className="text-2xl font-bold mb-4 border-b border-cyber-green pb-2">
            [ABOUT]
          </h2>
          <div className="space-y-2 font-mono text-sm">
            <p>&gt; Name: <span className="text-cyber-green-dark">John Doe</span></p>
            <p>&gt; Role: <span className="text-cyber-green-dark">Full Stack Developer</span></p>
            <p>&gt; Status: <span className="text-cyber-green-dark">Available for hire</span></p>
            <p>&gt; Location: <span className="text-cyber-green-dark">Cyberspace</span></p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="cyber-card">
          <h2 className="text-2xl font-bold mb-4 border-b border-cyber-green pb-2">
            [SKILLS]
          </h2>
          <div className="space-y-3 font-mono text-sm">
            <div>
              <div className="flex justify-between mb-1">
                <span>&gt; JavaScript</span>
                <span>95%</span>
              </div>
              <div className="h-2 bg-cyber-charcoal border border-cyber-green">
                <div className="h-full bg-cyber-green neon-glow w-[95%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>&gt; React/Next.js</span>
                <span>90%</span>
              </div>
              <div className="h-2 bg-cyber-charcoal border border-cyber-green">
                <div className="h-full bg-cyber-green neon-glow w-[90%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>&gt; Node.js</span>
                <span>85%</span>
              </div>
              <div className="h-2 bg-cyber-charcoal border border-cyber-green">
                <div className="h-full bg-cyber-green neon-glow w-[85%]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Status Section */}
        <section className="cyber-card">
          <h2 className="text-2xl font-bold mb-4 border-b border-cyber-green pb-2">
            [SYSTEM_STATUS]
          </h2>
          <div className="space-y-2 font-mono text-sm">
            <p className="flex items-center gap-2">
              <span className="status-online"></span> Network: ACTIVE
            </p>
            <p className="flex items-center gap-2">
              <span className="status-online"></span> Database: CONNECTED
            </p>
            <p className="flex items-center gap-2">
              <span className="status-online"></span> Security: ENCRYPTED
            </p>
            <p className="flex items-center gap-2">
              <span className="status-online"></span> API: OPERATIONAL
            </p>
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 neon-glow">
          &gt; RECENT_PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="cyber-card hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold">[PROJECT_001]</h3>
              <span className="text-xs bg-cyber-green text-cyber-black px-2 py-1">ACTIVE</span>
            </div>
            <p className="text-sm mb-4 opacity-80">
              E-Commerce platform with real-time inventory management and AI-powered recommendations.
            </p>
            <div className="flex gap-2 flex-wrap text-xs">
              <span className="border border-cyber-green px-2 py-1">#React</span>
              <span className="border border-cyber-green px-2 py-1">#Node.js</span>
              <span className="border border-cyber-green px-2 py-1">#MongoDB</span>
            </div>
          </article>

          <article className="cyber-card hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold">[PROJECT_002]</h3>
              <span className="text-xs bg-cyber-green text-cyber-black px-2 py-1">DEPLOYED</span>
            </div>
            <p className="text-sm mb-4 opacity-80">
              Real-time data visualization dashboard for IoT devices with predictive analytics.
            </p>
            <div className="flex gap-2 flex-wrap text-xs">
              <span className="border border-cyber-green px-2 py-1">#Next.js</span>
              <span className="border border-cyber-green px-2 py-1">#TypeScript</span>
              <span className="border border-cyber-green px-2 py-1">#D3.js</span>
            </div>
          </article>
        </div>
      </section>

      {/* Terminal Command Section */}
      <section className="cyber-card mb-12">
        <h2 className="text-2xl font-bold mb-4">&gt; TERMINAL_INPUT</h2>
        <div className="bg-cyber-black p-4 border border-cyber-green font-mono text-sm">
          <p className="mb-2">&gt; user@portfolio:~$ contact --init</p>
          <p className="mb-2 opacity-80">Initializing contact protocols...</p>
          <p className="mb-4 opacity-80">Ready to receive transmission.</p>
          <div className="flex gap-4 flex-wrap">
            <button className="cyber-button text-xs">
              [EMAIL]
            </button>
            <button className="cyber-button text-xs">
              [GITHUB]
            </button>
            <button className="cyber-button text-xs">
              [LINKEDIN]
            </button>
            <button className="cyber-button text-xs">
              [TWITTER]
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center border-t border-cyber-green pt-8">
        <p className="text-sm opacity-80 font-mono">
          &copy; 2025 CYBERPUNK_PORTFOLIO | ALL SYSTEMS OPERATIONAL | v2.0.77
        </p>
        <p className="text-xs opacity-60 mt-2">
          &gt; Built with Next.js + TypeScript + Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
