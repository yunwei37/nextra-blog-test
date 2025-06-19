import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <span className="text-white font-semibold">Nextra</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              A powerful static site generator built on top of Next.js for creating beautiful documentation and blogs.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com/shuding/nextra" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/shuding_" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs" className="text-gray-400 hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="/docs/installation" className="text-gray-400 hover:text-white transition-colors">Installation</a></li>
              <li><a href="/docs/configuration" className="text-gray-400 hover:text-white transition-colors">Configuration</a></li>
              <li><a href="/docs/components" className="text-gray-400 hover:text-white transition-colors">Components</a></li>
            </ul>
          </div>

          {/* Examples */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Examples</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/app" className="text-gray-400 hover:text-white transition-colors">React App</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog Example</a></li>
              <li><a href="/showcase" className="text-gray-400 hover:text-white transition-colors">Showcase</a></li>
              <li><a href="/templates" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://discord.gg/hEM84NMkRv" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
              <li><a href="https://github.com/shuding/nextra/discussions" className="text-gray-400 hover:text-white transition-colors">Discussions</a></li>
              <li><a href="https://github.com/shuding/nextra/issues" className="text-gray-400 hover:text-white transition-colors">Issues</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Nextra. Powered by{' '}
              <a href="https://nextjs.org" className="text-blue-400 hover:text-blue-300 transition-colors">
                Next.js
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <span>•</span>
              <span>Built with ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 