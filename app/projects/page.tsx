interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'ONLINE' | 'OFFLINE' | 'DEV';
}

const projects: Project[] = [
  {
    id: "01",
    title: "neural-network-visualizer",
    description: "Real-time 3D visualization of neural network training processes using WebGL. Features interactive node inspection and weight heatmaps.",
    tags: ["WebGL", "Three.js", "Python"],
    status: "ONLINE"
  },
  {
    id: "02",
    title: "crypto-arbitrage-bot",
    description: "High-frequency trading bot analyzing price discrepancies across decentralized exchanges. Implements flash loan strategies for risk-free execution.",
    tags: ["Solidity", "Node.js", "Web3"],
    status: "DEV"
  },
  {
    id: "03",
    title: "cyber-security-dashboard",
    description: "Centralized threat monitoring dashboard for enterprise networks. Aggregates logs from multiple sources and uses ML to detect anomalies.",
    tags: ["React", "Go", "ElasticSearch"],
    status: "ONLINE"
  },
  {
    id: "04",
    title: "satellite-tracker-cli",
    description: "Command-line interface for tracking low-earth orbit satellites in real-time. Calculates visibility windows and generates pass predictions.",
    tags: ["Rust", "CLI", "Astronomy"],
    status: "OFFLINE"
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">&gt; PROJECTS_</h1>
        <p className="text-cyber-gray font-mono">
          {'// Indexing'} {projects.length} repositories...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border border-cyber-charcoal bg-cyber-black/50 p-6 flex flex-col group hover:border-cyber-green transition-all hover:shadow-[0_0_15px_rgba(0,255,65,0.1)]"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-cyber-green group-hover:text-glow">
                [{project.id}] {project.title}
              </h2>
              <span className={`text-xs px-2 py-1 border ${
                project.status === 'ONLINE' ? 'border-cyber-green text-cyber-green' :
                project.status === 'DEV' ? 'border-yellow-500 text-yellow-500' :
                'border-red-500 text-red-500'
              }`}>
                {project.status}
              </span>
            </div>

            {/* Placeholder Image Area */}
            <div className="aspect-video bg-cyber-charcoal/50 border border-cyber-charcoal mb-6 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]"></div>
              <span className="text-cyber-gray font-mono text-xs">NO_SIGNAL_INPUT</span>
            </div>

            {/* Description */}
            <p className="text-cyber-gray font-mono text-sm mb-6 flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs text-cyber-gray bg-cyber-charcoal px-2 py-1 font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
