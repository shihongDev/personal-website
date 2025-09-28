export default function Hero() {
  return (
    <section id="hero" className="min-h-section flex items-center">
      <div className="container-readable w-full">
        <div className="component-spacing">
          <h1 className="text-4xl md:text-hero font-medium text-text-primary leading-tight">
            Shihong Liu
          </h1>
          
          <p className="text-lg md:text-title text-text-secondary font-normal">
            Machine Learning Engineer 
          </p>
          
          <div className="max-w-2xl">
            <p>
            I am a Machine Learning Engineer at DoorDash, specializing in AI Agents, fine-tuning, large-scale systems optimization. My current work focuses on fine-tuning open-weight models, building batch inference pipelines, and developing robust evaluation frameworks. 
            My previous research background includes computer vision, few-shot learning, and vision-language models, with publications at top-tier venues such as CVPR.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a 
              href="mailto:lsh98jobs@gmail.com"
              className="text-accent hover:underline font-medium"
            >
              Email 
            </a>
            <a 
              href="https://linkedin.com/in/shihongliu98"
              className="text-accent hover:underline font-medium"
            >
              LinkedIn 
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 