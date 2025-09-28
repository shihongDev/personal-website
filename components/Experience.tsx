const experiences = [
  {
    title: "Software Engineer",
    company: "Amazon Inc",
    period: "08/2023 - Present",
    description: "Designing and launching robust large-scale systems using Java, deploying intricate optimization models that enhanced Amazon's fulfillment operations across 50+ centers in North America and Europe.",
    achievements: [
      "Developed AI Agent using LangChain, fine-tuning LLMs to process terabytes of data and improve operational efficiency by 20%",
      "Received 2023 Invent & Simplify Award for AI-driven operational efficiency contributions",
      "Implemented autonomous task orchestration with reinforcement learning algorithms"
    ]
  },
  {
    title: "Research Intern",
    company: "Carnegie Mellon University",
    period: "12/2022 – 08/2024",
    description: "Conducted research under Prof. Deva Ramanan on few-shot learning for computer vision, utilizing Vision-Language Models and Large Language Models with advanced post-training optimization techniques.",
    achievements: [
      "Developed novel prompt-tuning method for Vision-Language Models using LLMs as optimizers",
      "Published paper at CVPR 2024: 'Language Models as Black-Box Optimizers for Vision-Language Models'",
      "Achieved significant improvements across multiple downstream CV tasks"
    ]
  },
  {
    title: "Research Intern",
    company: "InfiniteQuant LLC",
    period: "05/2023 – 08/2023",
    description: "Collaborated with traders and developers to design and integrate new features into research platform, high-frequency back tester, and trading system using C++ and Python.",
    achievements: [
      "Developed trading models and signals for live trading environment",
      "Implemented data transformations and visualization tools for market analysis",
      "Utilized Python libraries (Pandas, NumPy, Matplotlib) for market data processing"
    ]
  },
  {
    title: "ML Research Intern",
    company: "Fudan University",
    period: "06/2019 – 04/2020",
    description: "Worked under Prof. Xiahai Zhuang on automated machine learning pipeline for Computer-Aided Classification of Multimodal images using PyTorch and U-Net neural networks.",
    achievements: [
      "Developed automated ML pipeline for multimodal image classification",
      "Implemented U-Net with skip connections for high-precision image segmentation",
      "Published research in Frontiers in Aging Neuroscience"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-section section-spacing">
      <div className="container-readable">
        <div className="component-spacing">
          <h2 className="text-2xl md:text-section font-medium text-text-primary">
            Work Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l border-border pl-6 ml-3">
                <div className="relative -ml-[1.6rem] w-3 h-3 bg-text-tertiary rounded-full border-4 border-background" />
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg md:text-title font-medium text-text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-base md:text-body text-text-secondary">
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                  
                  <p className="text-base md:text-body text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-1 text-sm md:text-small text-text-secondary">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 