'use client'

import React, { type FC } from 'react'
import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'

export const Navbar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { topLevelNavbarItems } = normalizePages({
    list: pageMap,
    route: pathname
  })

  return (
    <nav className="backdrop-blur-md bg-white/70">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">✦</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Makoto Style
              </h1>
              <p className="text-xs text-gray-600 font-light">Dream Documentation</p>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-6">
            {topLevelNavbarItems.map(item => {
              const route = item.route || ('href' in item ? item.href! : '')
              const isActive = pathname === route || (route !== '/' && pathname.startsWith(route))
              
              return (
                <li key={route}>
                  <Anchor 
                    href={route} 
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-purple-700 border border-purple-200/50 backdrop-blur-sm shadow-md' 
                        : 'text-gray-700 hover:text-purple-700 hover:bg-white/50 hover:backdrop-blur-sm'
                    }`}
                  >
                    {item.title}
                  </Anchor>
                </li>
              )
            })}
          </ul>

          {/* Search/Actions */}
          <div className="flex items-center space-x-3">
            <button className="p-3 text-gray-500 hover:text-purple-600 rounded-xl hover:bg-white/50 hover:backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div className="w-px h-6 bg-gradient-to-b from-blue-300 to-purple-300"></div>
            <a 
              href="https://github.com/shuding/nextra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-500 hover:text-purple-600 rounded-xl hover:bg-white/50 hover:backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 