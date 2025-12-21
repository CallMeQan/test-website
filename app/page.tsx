export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] p-8 md:p-12 lg:p-16 max-w-7xl mx-auto flex flex-col justify-center">

      {/* Top Meta Info */}
      <div className="mb-12 font-mono text-sm">
        <div className="text-cyber-gray mb-2">STATUS:</div>
        <div className="text-cyber-green text-lg font-bold">
          AVAILABLE FOR HIRE. REMOTE / ASYNC.
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white">
          JULES_DEV.
        </h1>
        <p className="text-xl md:text-2xl text-cyber-gray font-mono">
          Building the future, one line of code at a time.
        </p>
      </div>

      {/* Grid Content */}
      <div className="mb-16">
        <div className="text-cyber-gray mb-4 font-mono">{'// SERVICES'}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item 01 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[01]</span>
            <div className="text-cyber-gray font-mono text-sm leading-relaxed">
              <strong className="block text-white mb-2">Full Stack Development</strong>
              End-to-end application development using modern frameworks. From database design to frontend interactivity.
            </div>
          </div>

          {/* Item 02 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[02]</span>
            <div className="text-cyber-gray font-mono text-sm leading-relaxed">
              <strong className="block text-white mb-2">System Architecture</strong>
              Designing scalable, resilient, and high-performance systems. Microservices, serverless, and cloud-native solutions.
            </div>
          </div>

          {/* Item 03 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[03]</span>
            <div className="text-cyber-gray font-mono text-sm leading-relaxed">
              <strong className="block text-white mb-2">UI/UX Engineering</strong>
              Crafting immersive and accessible user interfaces. Bridging the gap between design and technical implementation.
            </div>
          </div>

          {/* Item 04 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[04]</span>
            <div className="text-cyber-gray font-mono text-sm leading-relaxed">
              <strong className="block text-white mb-2">Performance Optimization</strong>
              Auditing and improving application speed, responsiveness, and resource efficiency.
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Metrics */}
      <div className="border-t border-cyber-charcoal pt-8 mt-auto">
        <div className="text-cyber-gray text-xs tracking-widest uppercase mb-2">YEARS_EXP</div>
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyber-green font-mono">
          05
        </div>
      </div>

    </main>
  );
}
