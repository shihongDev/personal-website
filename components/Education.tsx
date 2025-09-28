export default function Education() {
  const education = [
    {
      degree: "Master of Information Systems Management",
      school: "Carnegie Mellon University",
      location: "Pittsburgh, USA", 
      period: "Aug 2021 - May 2023",
      courses: ["Deep Learning (11-785)", "Machine Learning (10-701)"]
    },
    {
      degree: "Bachelor of Science in Computer Science (First Class Honors)",
      school: "University of Nottingham", 
      location: "Nottingham, UK",
      period: "Sept 2017 - July 2021",
      courses: ["Machine Learning (G51MLI)", "Software Engineering Group Project (G51FSE)", "Introduction to Scientific Computation (G53NSC)", "Software Quality Assurance (G54SQA)"]
    }
  ]

  return (
    <section id="education" className="min-h-section section-spacing">
      <div className="container-readable">
        <div className="component-spacing">
          <h2 className="text-2xl md:text-section font-medium text-text-primary mb-12">
            Education
          </h2>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-border pl-8 relative">
                <div className="absolute -left-2 top-0 w-3 h-3 bg-accent rounded-full"></div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg md:text-title font-medium text-text-primary">
                      {edu.school}
                    </h3>
                    <p className="text-base md:text-body text-text-secondary mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-sm md:text-small text-text-tertiary mt-1">
                      {edu.location} • {edu.period}
                    </p>
                  </div>
                  
                  {edu.courses && edu.courses.length > 0 && (
                    <div>
                      <p className="text-sm md:text-small font-medium text-text-secondary mb-2">
                        Relevant Coursework:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="text-sm md:text-small px-3 py-1 bg-gray-50 text-text-secondary rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
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