export default function About() {
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">&gt; WHOAMI_</h1>
        <div className="h-px bg-cyber-charcoal w-full max-w-xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-cyber-gray font-mono mb-4 text-sm">{'// IDENTITY'}</h2>
            <p className="text-cyber-gray font-mono leading-relaxed">
              I am a digital artisan traversing the infinite void of the web. Specialized in constructing resilient systems and aesthetic interfaces that bridge the gap between human cognition and machine logic. My code is my craft, my terminal is my home.
            </p>
          </div>

          <div>
            <h2 className="text-cyber-gray font-mono mb-4 text-sm">{'// SPECS'}</h2>
            <ul className="space-y-2 font-mono text-sm text-cyber-gray">
              <li className="flex items-center">
                <span className="text-cyber-green mr-2">&gt;</span>
                LOCATION: <span className="text-white ml-2">Worldwide_Web</span>
              </li>
              <li className="flex items-center">
                <span className="text-cyber-green mr-2">&gt;</span>
                LEVEL: <span className="text-white ml-2">Senior Fullstack Engineer</span>
              </li>
              <li className="flex items-center">
                <span className="text-cyber-green mr-2">&gt;</span>
                UPTIME: <span className="text-white ml-2">99.99%</span>
              </li>
              <li className="flex items-center">
                <span className="text-cyber-green mr-2">&gt;</span>
                MAIN_STACK: <span className="text-white ml-2">[TypeScript, Rust, WebGL]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact / Community Column */}
        <div>
          <h2 className="text-cyber-gray font-mono mb-6 text-sm">{'// COMMUNITY & CONTACT'}</h2>

          <div className="grid gap-4">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="group block" aria-label="Connect on Discord">
              <div className="border border-cyber-charcoal p-4 flex items-center justify-between hover:border-cyber-green transition-all hover:bg-cyber-green/5">
                <div className="flex items-center">
                  <span className="text-cyber-green mr-4 text-xl group-hover:text-glow" aria-hidden="true">@</span>
                  <span className="text-white font-mono group-hover:text-cyber-green transition-colors">Discord</span>
                </div>
                <span className="text-cyber-gray text-xs group-hover:text-cyber-green">&gt; CONNECT</span>
              </div>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group block" aria-label="Follow on GitHub">
              <div className="border border-cyber-charcoal p-4 flex items-center justify-between hover:border-cyber-green transition-all hover:bg-cyber-green/5">
                <div className="flex items-center">
                  <span className="text-cyber-green mr-4 text-xl group-hover:text-glow" aria-hidden="true">~</span>
                  <span className="text-white font-mono group-hover:text-cyber-green transition-colors">GitHub</span>
                </div>
                <span className="text-cyber-gray text-xs group-hover:text-cyber-green">&gt; FOLLOW</span>
              </div>
            </a>

            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="group block" aria-label="Message on Reddit">
              <div className="border border-cyber-charcoal p-4 flex items-center justify-between hover:border-cyber-green transition-all hover:bg-cyber-green/5">
                <div className="flex items-center">
                  <span className="text-cyber-green mr-4 text-xl group-hover:text-glow" aria-hidden="true">#</span>
                  <span className="text-white font-mono group-hover:text-cyber-green transition-colors">Reddit</span>
                </div>
                <span className="text-cyber-gray text-xs group-hover:text-cyber-green">&gt; MESSAGE</span>
              </div>
            </a>

            <a href="mailto:contact@example.com" className="group block" aria-label="Send an email">
              <div className="border border-cyber-charcoal p-4 flex items-center justify-between hover:border-cyber-green transition-all hover:bg-cyber-green/5">
                <div className="flex items-center">
                  <span className="text-cyber-green mr-4 text-xl group-hover:text-glow" aria-hidden="true">?</span>
                  <span className="text-white font-mono group-hover:text-cyber-green transition-colors">Email</span>
                </div>
                <span className="text-cyber-gray text-xs group-hover:text-cyber-green">&gt; SEND</span>
              </div>
            </a>
          </div>

          <div className="mt-8 p-4 border border-cyber-charcoal border-dashed">
            <p className="text-cyber-gray text-xs font-mono text-center">
              * Transmission encrypted via 256-bit protocol.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
