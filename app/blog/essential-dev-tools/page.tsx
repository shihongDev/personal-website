export const metadata = {
  title: 'Essential Developer Tools: A Curated Collection | Shihong Liu',
  description: 'A comprehensive guide to essential tools that enhance developer productivity, from knowledge management to development workflows.',
}

export default function EssentialDevTools() {
  return (
    <article className="section-spacing">
      <div className="container-readable">
        <div className="component-spacing">
          {/* Article Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 text-small text-text-tertiary mb-4">
              <span className="px-3 py-1 bg-border text-text-secondary rounded-full">
                Tools
              </span>
              <time dateTime="2024-02-20">
                February 20, 2024
              </time>
              <span>•</span>
              <span>6 min read</span>
            </div>
            
            <h1 className="text-section font-medium text-text-primary mb-6 max-w-4xl mx-auto">
              Essential Developer Tools: A Curated Collection
            </h1>
            
            <div className="w-16 h-px bg-border mx-auto"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-gray max-w-none">
            <div className="text-body text-text-secondary leading-relaxed space-y-6">
              <p>
                As developers, our productivity is heavily influenced by the tools we choose. The right set of tools can streamline workflows, reduce cognitive load, and help us focus on what matters most: building great software. This curated collection represents the essential tools that have significantly impacted my development workflow.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">
                Code Editors & IDEs
              </h2>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Cursor IDE
              </h3>
              
              <p>
                An AI-powered fork of VS Code that brings intelligent code completion, chat-based assistance, and codebase understanding directly into your editor. Cursor excels at understanding context and generating relevant code suggestions.
              </p>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Visual Studio Code
              </h3>
              
              <p>
                Still the gold standard for versatile coding. With its extensive ecosystem of extensions, VS Code adapts to virtually any development workflow. Essential extensions include GitLens, Prettier, and language-specific tools.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">
                Knowledge Management
              </h2>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Obsidian
              </h3>
              
              <p>
                A powerful knowledge management tool that uses markdown files and creates a graph of interconnected notes. Perfect for documenting complex systems, API references, and maintaining technical knowledge bases.
              </p>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Notion
              </h3>
              
              <p>
                Combines notes, databases, and project management in one platform. Excellent for planning features, tracking bugs, and maintaining team documentation. The database functionality is particularly useful for organizing information.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">
                Development Workflow
              </h2>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Git & GitHub
              </h3>
              
              <p>
                Essential for version control and collaboration. GitHub's features like Actions, Discussions, and Projects make it more than just a code repository. Consider learning advanced Git techniques like interactive rebasing and cherry-picking.
              </p>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Docker
              </h3>
              
              <p>
                Containerization that ensures consistent development environments across different machines. Docker eliminates "works on my machine" problems and simplifies deployment workflows.
              </p>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Postman/Insomnia
              </h3>
              
              <p>
                API testing tools that allow you to create, test, and document APIs efficiently. Both offer collections, environment variables, and automated testing capabilities.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">
                Terminal & Command Line
              </h2>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                iTerm2 (macOS) / Windows Terminal
              </h3>
              
              <p>
                Enhanced terminal applications that support tabs, split panes, and customization. iTerm2's features like instant replay and search are particularly useful for debugging.
              </p>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Oh My Zsh
              </h3>
              
              <p>
                A framework for managing Zsh configuration with plugins and themes. Plugins like <code className="bg-border px-2 py-1 rounded text-small">git</code>, <code className="bg-border px-2 py-1 rounded text-small">zsh-autosuggestions</code>, and <code className="bg-border px-2 py-1 rounded text-small">zsh-syntax-highlighting</code> significantly improve terminal productivity.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">
                Design & Prototyping
              </h2>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Figma
              </h3>
              
              <p>
                The standard for collaborative design and prototyping. Essential for wireframing, creating user interfaces, and maintaining design systems. The developer handoff features are particularly valuable.
              </p>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Excalidraw
              </h3>
              
              <p>
                A simple, open-source drawing tool perfect for creating diagrams, flowcharts, and quick sketches. The hand-drawn style makes it ideal for brainstorming and architectural discussions.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">
                Productivity & Organization
              </h2>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Raycast (macOS)
              </h3>
              
              <p>
                A powerful launcher and productivity tool that replaces Spotlight with customizable commands, quick actions, and integrations. Create custom scripts and workflows to automate repetitive tasks.
              </p>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                CleanMyMac
              </h3>
              
              <p>
                System optimization tool that helps maintain performance by cleaning caches, managing startup items, and monitoring system health. Particularly useful for developers who work with large codebases and multiple development environments.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">
                Browser Extensions
              </h2>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                React Developer Tools
              </h3>
              
              <p>
                Essential for React development, providing component inspection, state management debugging, and performance profiling capabilities.
              </p>

              <h3 className="text-title font-medium text-text-primary mt-8 mb-4">
                Web Developer Extensions
              </h3>
              
              <p>
                Tools like ColorZilla, WhatFont, and JSON Formatter that assist with web development tasks like color picking, font identification, and data formatting.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">
                Building Your Toolkit
              </h2>
              
              <p>
                The key to a productive development environment is finding tools that complement your workflow rather than disrupting it. Start with the basics and gradually add specialized tools as your needs evolve. Remember that the goal is to reduce friction in your development process, not to collect tools for their own sake.
              </p>

              <p>
                Consider factors like learning curve, integration capabilities, and long-term maintenance when evaluating new tools. The best tools are often those that solve real problems you're experiencing rather than those that seem impressive on paper.
              </p>

              <p>
                Most importantly, invest time in learning your chosen tools deeply. A few well-mastered tools are more valuable than many superficially understood ones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
} 