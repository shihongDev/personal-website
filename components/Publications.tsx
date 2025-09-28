const publications = [
  {
    title: "Language Models as Black-Box Optimizers for Vision-Language Models",
    authors: "Shihong Liu, Samuel Yu, Zhiqiu Lin, Deepak Pathak, Deva Ramanan",
    venue: "IEEE/CVF Computer Vision and Pattern Recognition Conference (CVPR)",
    year: "2024",
    type: "Conference",
    link: "https://arxiv.org/abs/2309.05950"
  },
  {
    title: "Computer-Aided Classification Framework of Parkinsonian Disorders Using 11 C-CFT PET Imaging",
    authors: "Shihong Liu, Jiahang Xu, Qian Xu, et al.",
    venue: "Frontiers in Aging Neuroscience",
    year: "2021",
    type: "Journal",
    link: "https://www.frontiersin.org/articles/10.3389/fnagi.2021.792951"
  }
]

export default function Publications() {
  return (
    <section id="publications" className="min-h-section section-spacing">
      <div className="container-readable">
        <div className="component-spacing">
          <h2 className="section-title">
            Publications
          </h2>
          
          <div className="section-content">
            {publications.map((pub, index) => (
              <div key={index} className="border-l-2 border-border pl-4">
                <div className="space-y-2">
                  <h3 className="text-lg md:text-title font-medium text-text-primary leading-snug">
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {pub.title}
                    </a>
                  </h3>
                  
                  <p className="text-base md:text-body text-text-secondary">
                    {pub.authors}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 text-sm md:text-small text-text-tertiary">
                    <span className="font-medium">{pub.venue}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 bg-border rounded text-text-secondary">
                      {pub.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          

        </div>
      </div>
    </section>
  )
} 