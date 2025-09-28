import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container-readable py-6">
          <nav className="flex items-center justify-between">
            <Link 
              href="/"
              className="text-title font-medium text-text-primary hover:text-accent transition-colors"
            >
              ← Back to home
            </Link>
            <h1 className="text-title font-medium text-text-primary">
              Blog
            </h1>
          </nav>
        </div>
      </header>
      
      <main>
        {children}
      </main>
    </div>
  )
} 