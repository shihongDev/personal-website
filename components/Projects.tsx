const projects = [
  {
    title: "Easy Research",
    description: "Web-based platform leveraging LLMs to facilitate and automate scientific research processes. Generates scientific hypotheses, designs experiments, and analyzes data with real-time processing capabilities.",
    tech: ["React.js", "FastAPI", "Python", "Docker", "EC2"],
    link: "https://easypaper.io",
    year: "2024"
  },
  {
    title: "Automatic Trading Bot for Cryptocurrency",
    description: "LLM fine-tuned trading bot that exploits market inefficiencies using historical and real-time data. Features web scraping, sentiment analysis, and low-latency execution engine.",
    tech: ["Python", "LLM", "WebSocket APIs", "ELISA"],
    link: "#",
    year: "2023"
  },
  {
    title: "Neuroevolution for Reinforcement Learning",
    description: "NEAT agent implementation for evolving neural networks in Neural Slime Volleyball. Optimizes both architecture and weights simultaneously using NumPy and JAX with automatic differentiation.",
    tech: ["Python", "NumPy", "JAX", "NEAT"],
    link: "#",
    year: "2023"
  },
  {
    title: "Stable Diffusion for Generative Kanji Synthesis",
    description: "Fine-tuned Stable Diffusion model to generate novel Japanese Kanji characters from English definitions. Creates semantically coherent characters for modern concepts using custom dataset.",
    tech: ["Stable Diffusion", "Python", "GPU", "KANJIDIC2"],
    link: "#",
    year: "2022"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-section section-spacing">
      <div className="container-readable">
        <div className="component-spacing">
          <h2 className="text-2xl md:text-section font-medium text-text-primary">
            Selected Projects
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:border-text-tertiary transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg md:text-title font-medium text-text-primary">
                      {project.link !== "#" ? (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <span className="text-sm md:text-small text-text-tertiary">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-base md:text-body text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-border text-text-secondary text-sm md:text-small rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link !== "#" && (
                    <div className="pt-2">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-sm md:text-small font-medium"
                      >
                        View Project →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
} 