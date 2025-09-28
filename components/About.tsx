export default function About() {
  return (
    <section id="about" className="min-h-section flex items-center section-spacing">
      <div className="container-readable w-full">
        <div className="component-spacing">
          <h2 className="text-2xl md:text-section font-medium text-text-primary">
            About
          </h2>
          
          <div className="max-w-3xl component-spacing text-base md:text-body text-text-secondary leading-relaxed">
            <p>
              I am currently a Software Engineer at Amazon, where I design and deploy large-scale systems 
              that enhance fulfillment operations across 50+ centers in North America and Europe. 
              My work focuses on AI-driven optimization models and autonomous task orchestration using LLMs.
            </p>
            
            <p>
              I hold a Master's in Information Systems Management from Carnegie Mellon University, where I also 
              conducted research under Prof. Deva Ramanan on few-shot learning for computer vision. 
              Previously, I earned a First Class Honors Bachelor's in Computer Science from the University of Nottingham.
            </p>
            
            <p>
              My research interests span computer vision, vision-language models, and large language models. 
              I have published work at top-tier conferences including CVPR 2024, focusing on novel prompt-tuning 
              methods for vision-language models using LLMs as optimizers.
            </p>
          </div>
          
          <div className="pt-8">
            <h3 className="text-lg md:text-title font-medium text-text-primary mb-4">
              Current Focus
            </h3>
            <ul className="space-y-2 text-base md:text-body text-text-secondary">
              <li>• Large-scale systems optimization at Amazon</li>
              <li>• Vision-language models and few-shot learning</li>
              <li>• LLM-based optimization and autonomous agents</li>
              <li>• Computer vision and multimodal AI systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 