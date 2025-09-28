export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container-readable w-full">
        <div className="space-y-8 md:space-y-12">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-hero font-medium text-text-primary leading-tight tracking-tight">
              Shihong Liu
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-title text-text-secondary font-normal">
              Machine Learning Engineer
            </p>
          </div>
          
          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              I am a Machine Learning Engineer at DoorDash, specializing in AI Agents, fine-tuning, and large-scale systems optimization. My current work focuses on fine-tuning open-weight models, building batch inference pipelines, and developing robust evaluation frameworks. 
            </p>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mt-4">
              My previous research background includes computer vision, few-shot learning, and vision-language models, with publications at top-tier venues such as CVPR.
            </p>
          </div>
          
          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a 
              href="mailto:lsh98jobs@gmail.com"
              className="inline-flex items-center text-lg text-accent hover:text-accent/80 font-medium transition-colors duration-200 hover:underline"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/shihongliu98"
              className="inline-flex items-center text-lg text-accent hover:text-accent/80 font-medium transition-colors duration-200 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 