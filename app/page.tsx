export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] p-8 md:p-12 lg:p-16 max-w-7xl mx-auto flex flex-col justify-center">

      {/* Top Meta Info */}
      <div className="mb-12 font-mono text-sm">
        <div className="text-cyber-gray mb-2">STATUS:</div>
        <div className="text-cyber-green text-lg font-bold">
          AVAILABLE FOR FREELANCE // REMOTE WORLDWIDE
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white">
          DEVELOPER.
        </h1>
        <p className="text-xl md:text-2xl text-cyber-gray font-mono">
          Building systems. Crafting experiences. Solving problems.
        </p>
      </div>

      {/* Grid Content */}
      <div className="mb-16">
        <div className="text-cyber-gray mb-4 font-mono">{'// WHAT I DO'}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item 01 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[01]</span>
            <p className="text-cyber-gray font-mono text-sm leading-relaxed">
              Full-stack development with modern frameworks and technologies. Building scalable web applications with clean architecture and responsive design principles.
            </p>
          </div>

          {/* Item 02 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[02]</span>
            <p className="text-cyber-gray font-mono text-sm leading-relaxed">
              Performance optimization and system design. Crafting efficient solutions that scale from prototype to production with millions of users.
            </p>
          </div>

          {/* Item 03 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[03]</span>
            <p className="text-cyber-gray font-mono text-sm leading-relaxed">
              UI/UX implementation with attention to detail. Creating intuitive interfaces that bridge functionality and aesthetics with pixel-perfect precision.
            </p>
          </div>

          {/* Item 04 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[04]</span>
            <p className="text-cyber-gray font-mono text-sm leading-relaxed">
              DevOps and cloud infrastructure. Implementing CI/CD pipelines, containerization, and automated deployment strategies for reliable delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Metrics */}
      <div className="border-t border-cyber-charcoal pt-8 mt-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-cyber-gray text-xs tracking-widest uppercase mb-2">PROJECTS</div>
            <div className="text-3xl md:text-4xl font-bold text-cyber-green font-mono">50+</div>
          </div>
          <div>
            <div className="text-cyber-gray text-xs tracking-widest uppercase mb-2">EXPERIENCE</div>
            <div className="text-3xl md:text-4xl font-bold text-cyber-green font-mono">5Y</div>
          </div>
          <div>
            <div className="text-cyber-gray text-xs tracking-widest uppercase mb-2">CLIENTS</div>
            <div className="text-3xl md:text-4xl font-bold text-cyber-green font-mono">30+</div>
          </div>
          <div>
            <div className="text-cyber-gray text-xs tracking-widest uppercase mb-2">TECHNOLOGIES</div>
            <div className="text-3xl md:text-4xl font-bold text-cyber-green font-mono">25+</div>
          </div>
        </div>
      </div>

    </main>
  );
}
