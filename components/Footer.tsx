export default function Footer() {
  return (
    <footer className="section-spacing border-t border-border">
      <div className="container-readable">
        <div className="component-spacing">
          <h2 className="section-title">Contact</h2>
          <div className="section-content flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-4">
              <h3 className="text-title font-medium text-text-primary">
                Get in touch
              </h3>
              <div className="space-y-2 text-body text-text-secondary">
                <p>
                  <a 
                    href="mailto:lsh98jobs@gmail.com"
                    className="hover:text-accent transition-colors"
                  >
                    lsh98jobs@gmail.com
                  </a>
                  {" • "}
                  <a 
                    href="tel:412.778.7446"
                    className="hover:text-accent transition-colors"
                  >
                    412.778.7446
                  </a>
                </p>
                <p>
                  <a 
                    href="https://linkedin.com/in/shihongliu98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                  {" • "}
                  <a 
                    href="https://scholar.google.com/citations?user=saiWZ-UAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Scholar
                  </a>
                </p>
              </div>
            </div>
            
            <div className="text-small text-text-tertiary">
              <p>© 2025 Shihong Liu. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 