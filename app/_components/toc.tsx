import React, { type FC } from 'react'
import type { Heading } from 'nextra'

export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  if (!toc.length) return null

  return (
    <div className="sticky top-20 w-64 p-6 glass-morphism border-l border-white/20 backdrop-blur-lg">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 flex items-center space-x-2">
            <span>✨</span>
            <span>页面导航</span>
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-sm"></div>
        </div>
        
        <nav className="space-y-1">
          <ul className="space-y-1">
            {toc.map(heading => (
              <li key={heading.id}>
                <a 
                  href={`#${heading.id}`}
                  className={`block py-2 text-sm transition-all duration-300 hover:text-purple-600 hover:pl-2 transform ${
                    heading.depth === 2 
                      ? 'text-gray-900 font-medium hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 rounded-lg px-2 -mx-2' 
                      : heading.depth === 3 
                        ? 'text-gray-700 pl-4 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 rounded-lg px-2 -mx-2' 
                        : 'text-gray-600 pl-8 hover:bg-gradient-to-r hover:from-pink-50/50 hover:to-blue-50/50 rounded-lg px-2 -mx-2'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>{heading.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 p-4 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/60 rounded-2xl border border-white/30 backdrop-blur-sm shadow-lg">
          <h4 className="text-xs font-semibold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-3 flex items-center space-x-2">
            <span>⚡</span>
            <span>快速操作</span>
          </h4>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:text-purple-700 hover:bg-white/60 rounded-lg transition-all duration-300 hover:shadow-md backdrop-blur-sm flex items-center space-x-2">
              <span>📝</span>
              <span>编辑页面</span>
            </button>
            <button className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:text-purple-700 hover:bg-white/60 rounded-lg transition-all duration-300 hover:shadow-md backdrop-blur-sm flex items-center space-x-2">
              <span>🐛</span>
              <span>反馈问题</span>
            </button>
            <button className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:text-purple-700 hover:bg-white/60 rounded-lg transition-all duration-300 hover:shadow-md backdrop-blur-sm flex items-center space-x-2">
              <span>⭐</span>
              <span>在 GitHub 上星标</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 