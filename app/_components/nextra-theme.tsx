import React, { type FC, type ReactNode } from 'react'
import type { PageMapItem } from 'nextra'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

export const NextraTheme: FC<{
  children: ReactNode
  pageMap: PageMapItem[]
}> = ({ children, pageMap }) => {
  return (
    <div className="min-h-screen relative z-10">
      {/* Header */}
      <header className="glass-morphism shadow-lg border-b border-white/20 relative z-20">
        <Navbar pageMap={pageMap} />
      </header>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-200px)] relative z-10">
        <Sidebar pageMap={pageMap} />
        <main className="flex-1 glass-morphism backdrop-blur-lg">
          <div className="max-w-none relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 