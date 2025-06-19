import type { Heading } from 'nextra'
import type { FC } from 'react'

export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  if (!toc.length) return null

  return (
    <div className="sticky top-20 w-64 p-6 bg-white border-l border-gray-200">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">On This Page</h3>
          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        
        <nav className="space-y-1">
          <ul className="space-y-1">
            {toc.map(heading => (
              <li key={heading.id}>
                <a 
                  href={`#${heading.id}`}
                  className={`block py-1 text-sm transition-colors hover:text-blue-600 ${
                    heading.depth === 2 
                      ? 'text-gray-900 font-medium' 
                      : heading.depth === 3 
                        ? 'text-gray-700 pl-3' 
                        : 'text-gray-600 pl-6'
                  }`}
                >
                  {heading.value}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-xs font-semibold text-gray-900 mb-2">Quick Actions</h4>
          <div className="space-y-2">
            <button className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-white rounded transition-colors">
              📝 Edit this page
            </button>
            <button className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-white rounded transition-colors">
              🐛 Report issue
            </button>
            <button className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-white rounded transition-colors">
              ⭐ Star on GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 