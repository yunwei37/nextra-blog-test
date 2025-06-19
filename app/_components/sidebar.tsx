'use client'

import React, { type FC, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'

export const Sidebar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { docsDirectories } = normalizePages({
    list: pageMap,
    route: pathname
  })

  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  const toggleSection = (route: string) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(route)) {
      newOpenSections.delete(route)
    } else {
      newOpenSections.add(route)
    }
    setOpenSections(newOpenSections)
  }

  // 获取可爱的图标
  const getKawaiiIcon = (title: string, hasChildren: boolean) => {
    if (hasChildren) return '📁'
    if (title.toLowerCase().includes('installation') || title.includes('安装')) return '⚙️'
    if (title.toLowerCase().includes('configuration') || title.includes('配置')) return '🔧'
    if (title.toLowerCase().includes('components') || title.includes('组件')) return '🧩'
    if (title.toLowerCase().includes('docs') || title.includes('文档')) return '📖'
    if (title.toLowerCase().includes('about') || title.includes('关于')) return '💝'
    return '📄'
  }

  const renderItem = (item: any, level = 0) => {
    const route = item.route || ('href' in item ? (item.href as string) : '')
    const { title } = item
    const isActive = pathname === route
    const hasChildren = 'children' in item && item.children?.length > 0
    const isOpen = openSections.has(route)

    return (
      <li key={route} className={`${level > 0 ? 'ml-4' : ''}`}>
        {hasChildren ? (
          <div className="space-y-1">
            <button
              onClick={() => toggleSection(route)}
              className={`group w-full flex items-center justify-between px-4 py-3 text-sm rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transform hover:scale-105 ${
                isActive ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-2 border-pink-200 shadow-lg' : 'text-pink-600 hover:text-purple-600'
              }`}
            >
              <span className="flex items-center space-x-3">
                <span className={`text-lg transition-transform duration-300 ${isOpen ? 'rotate-90' : ''} group-hover:animate-pulse`}>
                  🌸
                </span>
                <span className="font-bold">{title}</span>
                <span className="text-xs">{getKawaiiIcon(title, hasChildren)}</span>
              </span>
              <div className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <span className="text-pink-400">▼</span>
              </div>
            </button>
            {isOpen && (
              <ul className="space-y-1 pl-4 border-l-2 border-gradient-to-b from-pink-200 to-purple-200 ml-4">
                {item.children.map((child: any) => renderItem(child, level + 1))}
              </ul>
            )}
          </div>
        ) : (
          <Anchor 
            href={route} 
            className={`group block px-4 py-3 text-sm rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              isActive 
                ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg border-2 border-white/50 font-bold' 
                : 'text-pink-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50'
            }`}
          >
            <span className="flex items-center space-x-3">
              <span className={`text-lg transition-transform duration-300 ${isActive ? 'animate-bounce' : 'group-hover:animate-pulse'}`}>
                {getKawaiiIcon(title, false)}
              </span>
              <span>{title}</span>
              {isActive && <span className="text-xs animate-bounce">♡</span>}
            </span>
          </Anchor>
        )}
      </li>
    )
  }

  return (
    <aside className="w-80 bg-gradient-to-b from-white/95 to-pink-50/95 backdrop-blur-sm border-r-2 border-pink-200/50 overflow-y-auto">
      <div className="p-6">
        {/* 可爱的标题区域 */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
              ✨ 导航菜单 ✨
            </h2>
            <div className="absolute -top-2 -right-4 animate-bounce">
              <span className="text-yellow-400">⭐</span>
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full"></div>
          </div>
          <p className="text-xs text-pink-500 mt-3 font-medium">～(＾◡＾)～</p>
        </div>

        {/* 导航菜单 */}
        <nav className="space-y-3">
          <ul className="space-y-2">
            {docsDirectories.map(item => renderItem(item))}
          </ul>
        </nav>

        {/* 可爱的信息卡片 */}
        <div className="mt-8 p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-3xl border-2 border-pink-200/50 shadow-lg relative overflow-hidden">
          {/* 装饰性元素 */}
          <div className="absolute top-2 right-2 animate-pulse">
            <span className="text-pink-300">✨</span>
          </div>
          <div className="absolute bottom-2 left-2 animate-bounce" style={{animationDelay: '1s'}}>
            <span className="text-purple-300">🌙</span>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
              <h3 className="text-sm font-bold text-pink-700">快速信息 (◕‿◕)</h3>
            </div>
            <p className="text-xs text-pink-600 leading-relaxed mb-4">
              这是Claude的可爱二次元风格Nextra主题，支持React组件和MDX内容混合使用！
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-200 text-pink-700 text-xs rounded-full font-bold border border-pink-300">
                🌸 React
              </span>
              <span className="px-3 py-1 bg-purple-200 text-purple-700 text-xs rounded-full font-bold border border-purple-300">
                💜 MDX
              </span>
              <span className="px-3 py-1 bg-indigo-200 text-indigo-700 text-xs rounded-full font-bold border border-indigo-300">
                ✨ TypeScript
              </span>
            </div>
          </div>
        </div>

        {/* 可爱的角色卡片 */}
        <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border border-pink-200 text-center">
          <div className="text-4xl mb-2 animate-bounce">🦄</div>
          <p className="text-xs text-pink-600 font-bold">Claude的魔法独角兽</p>
          <p className="text-xs text-purple-500 mt-1">带你探索二次元世界！</p>
        </div>

        {/* 底部装饰 */}
        <div className="mt-6 text-center">
          <div className="flex justify-center space-x-2 text-lg">
            <span className="animate-bounce" style={{animationDelay: '0s'}}>🌸</span>
            <span className="animate-bounce" style={{animationDelay: '0.2s'}}>💕</span>
            <span className="animate-bounce" style={{animationDelay: '0.4s'}}>🌙</span>
            <span className="animate-bounce" style={{animationDelay: '0.6s'}}>✨</span>
            <span className="animate-bounce" style={{animationDelay: '0.8s'}}>🦄</span>
          </div>
        </div>
      </div>
    </aside>
  )
} 