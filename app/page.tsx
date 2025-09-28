import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Publications from '@/components/Publications'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Publications />
      <Projects />
      <Blog />
      <Footer />
    </main>
  )
} 