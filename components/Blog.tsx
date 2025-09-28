const blogPosts = [
  {
    title: "Mastering Cursor IDE: Tips and Tricks for Efficient Coding",
    excerpt: "Explore how to efficiently utilize Cursor's features to streamline your coding workflow, improve code quality, and accelerate development processes.",
    date: "2024-03-15",
    readTime: "8 min read",
    slug: "mastering-cursor-ide"
  },
  {
    title: "Essential Developer Tools: A Curated Collection",
    excerpt: "A comprehensive guide to essential tools that enhance developer productivity, from knowledge management to development workflows.",
    date: "2024-02-20",
    readTime: "6 min read",
    slug: "essential-dev-tools"
  },
  {
    title: "Amazon Nova Act: A Deep Dive into AI-Powered Web Automation",
    excerpt: "Explore Amazon's latest AI agent technology for reliable web automation, featuring task decomposition, Playwright integration, and practical implementation examples.",
    date: "2024-01-10",
    readTime: "10 min read",
    slug: "amazon-nova-act"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="min-h-section section-spacing">
      <div className="container-readable">
        <div className="component-spacing">
          <h2 className="text-2xl md:text-section font-medium text-text-primary">
            Recent Writing
          </h2>
          
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="border-b border-border pb-8 last:border-b-0">
                <div className="space-y-3">
                  <h3 className="text-lg md:text-title font-medium text-text-primary">
                    <a 
                      href={`/blog/${post.slug}`}
                      className="hover:text-accent transition-colors"
                    >
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className="text-base md:text-body text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-sm md:text-small text-text-tertiary">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="pt-2">
                    <a 
                      href={`/blog/${post.slug}`}
                      className="text-accent hover:underline text-sm md:text-small font-medium"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
                      </div>
            
            <div className="pt-8">
              <a 
                href="/blog"
                className="text-accent hover:underline font-medium"
              >
                View all posts →
              </a>
            </div>
          </div>
      </div>
    </section>
  )
} 