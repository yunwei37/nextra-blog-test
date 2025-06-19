import type { PageMapItem } from 'nextra'
import { version } from 'nextra/package.json'
import type { FC, ReactNode } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

export const NextraTheme: FC<{
  children: ReactNode
  pageMap: PageMapItem[]
}> = ({ children, pageMap }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <span className="text-sm font-medium">
              🎉 Custom Nextra Theme - Powered by Nextra {version}
            </span>
            <span className="text-xs opacity-90">Modern • Fast • Beautiful</span>
          </div>
        </div>
        <Navbar pageMap={pageMap} />
      </header>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-200px)]">
        <Sidebar pageMap={pageMap} />
        <main className="flex-1 bg-white">
          <div className="max-w-none">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 