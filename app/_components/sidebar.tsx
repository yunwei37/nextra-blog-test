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
              className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-gray-100 ${
                isActive ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                  ▶
                </span>
                <span className="font-medium">{title}</span>
              </span>
            </button>
            {isOpen && (
              <ul className="space-y-1 pl-2 border-l border-gray-200">
                {item.children.map((child: any) => renderItem(child, level + 1))}
              </ul>
            )}
          </div>
        ) : (
          <Anchor 
            href={route} 
            className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-gray-100 ${
              isActive 
                ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 font-medium' 
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            {title}
          </Anchor>
        )}
      </li>
    )
  }

  return (
    <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Navigation</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        <nav className="space-y-2">
          <ul className="space-y-1">
            {docsDirectories.map(item => renderItem(item))}
          </ul>
        </nav>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
            <h3 className="text-sm font-semibold text-gray-900">Quick Info</h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            This is a custom Nextra theme that supports both React components and MDX content.
          </p>
          <div className="mt-3 flex space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium">React</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded font-medium">MDX</span>
          </div>
        </div>
      </div>
    </aside>
  )
} 