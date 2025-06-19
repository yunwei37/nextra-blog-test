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
              className={`w-full flex items-center justify-between px-4 py-3 text-sm rounded-xl transition-all duration-300 hover:shadow-md ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-purple-700 border-l-4 border-purple-500 backdrop-blur-sm' 
                  : 'text-gray-700 hover:text-purple-700 hover:bg-white/60 hover:backdrop-blur-sm'
              }`}
            >
              <span className="flex items-center space-x-3">
                <span className={`transition-transform duration-300 text-purple-500 ${isOpen ? 'rotate-90' : ''}`}>
                  ✦
                </span>
                <span className="font-medium">{title}</span>
              </span>
            </button>
            {isOpen && (
              <ul className="space-y-1 pl-2 border-l-2 border-gradient-to-b from-blue-300/50 to-purple-300/50">
                {item.children.map((child: any) => renderItem(child, level + 1))}
              </ul>
            )}
          </div>
        ) : (
          <Anchor 
            href={route} 
            className={`block px-4 py-3 text-sm rounded-xl transition-all duration-300 hover:shadow-md ${
              isActive 
                ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-purple-700 border-l-4 border-purple-500 font-medium backdrop-blur-sm' 
                : 'text-gray-700 hover:text-purple-700 hover:bg-white/60 hover:backdrop-blur-sm'
            }`}
          >
            {title}
          </Anchor>
        )}
      </li>
    )
  }

  return (
    <aside className="w-80 glass-morphism border-r border-white/20 overflow-y-auto backdrop-blur-lg">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            ✨ 导航菜单
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-sm"></div>
        </div>

        <nav className="space-y-2">
          <ul className="space-y-2">
            {docsDirectories.map(item => renderItem(item))}
          </ul>
        </nav>

        {/* Additional Info */}
        <div className="mt-8 p-5 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/60 rounded-2xl border border-white/30 backdrop-blur-sm shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-md"></div>
            <h3 className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              快速信息
            </h3>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed mb-4 font-light">
            这是一个新海诚风格的 Nextra 主题，支持 React 组件和 MDX 内容，带来梦幻般的阅读体验。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-700 text-xs rounded-full font-medium backdrop-blur-sm border border-blue-200/50">
              React
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-700 text-xs rounded-full font-medium backdrop-blur-sm border border-purple-200/50">
              MDX
            </span>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-700 text-xs rounded-full font-medium backdrop-blur-sm border border-pink-200/50">
              Makoto
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
} 