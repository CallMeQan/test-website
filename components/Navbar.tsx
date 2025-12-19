import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-cyber-charcoal bg-cyber-black/90 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-cyber-green font-bold text-lg hover:text-glow">
              ~/portfolio.global
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              href="/"
              className="text-cyber-gray hover:text-cyber-green transition-colors text-sm uppercase tracking-wider"
            >
              [Home]
            </Link>
            <Link
              href="/projects"
              className="text-cyber-gray hover:text-cyber-green transition-colors text-sm uppercase tracking-wider"
            >
              [Projects]
            </Link>
            <Link
              href="/about"
              className="text-cyber-gray hover:text-cyber-green transition-colors text-sm uppercase tracking-wider"
            >
              [About]
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="border border-cyber-green px-2 py-1 text-xs text-cyber-green">
              5 ONLINE
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
