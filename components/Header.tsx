'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-readable">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-lg font-medium text-text-primary hover:text-accent transition-colors"
          >
            Shihong Liu
          </button>
          
          <nav className="hidden md:flex space-x-8">
   
            <button 
              onClick={() => scrollToSection('publications')}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Publications
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Blog
            </button>
          </nav>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex space-x-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              Blog
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
} 