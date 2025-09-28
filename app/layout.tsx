import './globals.css'

export const metadata = {
  title: 'Shihong Liu | ML Engineer & Researcher',
  description: 'Machine Learning Engineer at Amazon and researcher specializing in computer vision, LLMs, and AI systems.',
  keywords: ['machine learning', 'computer vision', 'AI', 'research', 'Amazon', 'Carnegie Mellon'],
  authors: [{ name: 'Shihong Liu' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-serif">
        {children}
      </body>
    </html>
  )
} 