export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] p-8 md:p-12 lg:p-16 max-w-7xl mx-auto flex flex-col justify-center">

      {/* Top Meta Info */}
      <div className="mb-12 font-mono text-sm">
        <div className="text-cyber-gray mb-2">ETA:</div>
        <div className="text-cyber-green text-lg font-bold">
          3M millennia. Heat death of universe vibes.
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white">
          THE BUTTON.
        </h1>
        <p className="text-xl md:text-2xl text-cyber-gray font-mono">
          One button. One goal. Millions of humans.
        </p>
      </div>

      {/* Grid Content */}
      <div className="mb-16">
        <div className="text-cyber-gray mb-4 font-mono">{'// WHY?'}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item 01 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[01]</span>
            <p className="text-cyber-gray font-mono text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Item 02 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[02]</span>
            <p className="text-cyber-gray font-mono text-sm leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Item 03 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[03]</span>
            <p className="text-cyber-gray font-mono text-sm leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {/* Item 04 */}
          <div className="border border-cyber-charcoal p-6 flex items-start group hover:border-cyber-green transition-colors">
            <span className="text-cyber-green font-bold mr-4 text-lg group-hover:text-glow">[04]</span>
            <p className="text-cyber-gray font-mono text-sm leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      {/* Target Metric */}
      <div className="border-t border-cyber-charcoal pt-8 mt-auto">
        <div className="text-cyber-gray text-xs tracking-widest uppercase mb-2">TARGET</div>
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyber-green font-mono">
          1,000,000,000,000
        </div>
      </div>

    </main>
  );
}
