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
    <nav className="bg-gradient-to-r from-white/95 to-pink-50/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 可爱的Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-lg animate-bounce">🌸</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Claude's Kawaii Site
              </h1>
              <p className="text-xs text-pink-500 font-medium">～(＾◡＾)～ 二次元の世界へようこそ！</p>
            </div>
          </div>

          {/* 可爱的导航链接 */}
          <ul className="flex items-center space-x-2">
            {topLevelNavbarItems.map((item, index) => {
              const route = item.route || ('href' in item ? item.href! : '')
              const isActive = pathname === route || (route !== '/' && pathname.startsWith(route))
              
              // 为每个菜单项分配可爱的图标
              const getKawaiiIcon = (title: string, index: number): string => {
                const icons = ['🏠', '📚', '💝', '🌙', '🎮', '🎨']
                const titleStr = typeof title === 'string' ? title : ''
                if (titleStr.toLowerCase().includes('home') || titleStr === '') return '🏠'
                if (titleStr.toLowerCase().includes('docs') || titleStr.toLowerCase().includes('文档')) return '📚'
                if (titleStr.toLowerCase().includes('about') || titleStr.toLowerCase().includes('关于')) return '💝'
                if (titleStr.toLowerCase().includes('app') || titleStr.toLowerCase().includes('应用')) return '🎮'
                if (titleStr.toLowerCase().includes('blog') || titleStr.toLowerCase().includes('博客')) return '✍️'
                return icons[index % icons.length]
              }
              
              return (
                <li key={route}>
                  <Anchor 
                    href={route} 
                    className={`group relative px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                      isActive 
                        ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg border-2 border-white/50' 
                        : 'text-pink-600 hover:text-purple-600 hover:bg-pink-50/80'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className={`text-lg transition-transform duration-300 ${isActive ? 'animate-bounce' : 'group-hover:animate-pulse'}`}>
                        {getKawaiiIcon(String(item.title), index)}
                      </span>
                      <span>{item.title}</span>
                    </span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      </div>
                    )}
                  </Anchor>
                </li>
              )
            })}
          </ul>

          {/* 可爱的操作按钮 */}
          <div className="flex items-center space-x-3">
            {/* 搜索按钮 */}
            <button className="group p-3 text-pink-400 hover:text-pink-600 rounded-2xl hover:bg-pink-50/80 transition-all duration-300 transform hover:scale-110">
              <div className="relative">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 text-xs">🔍</span>
              </div>
            </button>
            
            {/* 分隔线 */}
            <div className="w-px h-6 bg-gradient-to-b from-pink-200 to-purple-200"></div>
            
            {/* GitHub按钮 */}
            <a 
              href="https://github.com/shuding/nextra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-3 text-purple-400 hover:text-purple-600 rounded-2xl hover:bg-purple-50/80 transition-all duration-300 transform hover:scale-110"
            >
              <div className="relative">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="absolute -top-1 -right-1 text-xs">🐙</span>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub ♡
              </div>
            </a>

            {/* 主题切换按钮 */}
            <button className="group relative p-3 text-indigo-400 hover:text-indigo-600 rounded-2xl hover:bg-indigo-50/80 transition-all duration-300 transform hover:scale-110">
              <div className="relative">
                <span className="text-lg transition-transform duration-300 group-hover:rotate-180">🌙</span>
                <span className="absolute -bottom-1 -right-1 text-xs animate-pulse">✨</span>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                切换主题 ♡
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* 底部装饰线 */}
      <div className="h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300"></div>
    </nav>
  )
} 