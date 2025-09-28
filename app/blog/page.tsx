import Link from 'next/link'

const blogPosts = [
  {
    title: "Mastering Cursor IDE: Tips and Tricks for Efficient Coding",
    excerpt: "Explore how to efficiently utilize Cursor's features to streamline your coding workflow, improve code quality, and accelerate development processes.",
    date: "2024-03-15",
    readTime: "8 min read",
    slug: "mastering-cursor-ide",
    category: "Development"
  },
  {
    title: "Essential Developer Tools: A Curated Collection",
    excerpt: "A comprehensive guide to essential tools that enhance developer productivity, from knowledge management to development workflows.",
    date: "2024-02-20",
    readTime: "6 min read",
    slug: "essential-dev-tools",
    category: "Tools"
  },
  {
    title: "Amazon Nova Act: A Deep Dive into AI-Powered Web Automation",
    excerpt: "Explore Amazon's latest AI agent technology for reliable web automation, featuring task decomposition, Playwright integration, and practical implementation examples.",
    date: "2024-01-10",
    readTime: "10 min read",
    slug: "amazon-nova-act",
    category: "AI Development"
  },
  {
    title: "Reflections on Building AI Agents: Lessons from Amazon Think Big Hackathon",
    slug: "amazon-think-big-hackathon-2024",
    date: "2024-06-10",
    description: "Insights and lessons learned from participating in Amazon's Think Big Hackathon, winning the 'Deliver Results' award, and building AI agents over two years.",
  }
]

export default function BlogPage() {
  return (
    <div className="section-spacing">
      <div className="container-readable">
        <div className="component-spacing">
          <div className="text-center mb-12">
            <h1 className="text-section font-medium text-text-primary mb-4">
              Recent Writing
            </h1>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Thoughts on technology, machine learning, and software development.
            </p>
          </div>
          
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="border border-border rounded-lg p-6 hover:border-text-tertiary transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-small text-text-tertiary">
                    <span className="px-2 py-1 bg-border text-text-secondary rounded">
                      {post.category}
                    </span>
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
                  
                  <h2 className="text-title font-medium text-text-primary">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-accent transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-body text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-accent hover:underline text-small font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 