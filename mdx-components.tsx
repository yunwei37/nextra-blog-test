import React, { type ReactNode } from 'react'
import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { TOC } from './app/_components/toc'
import type { Heading } from 'nextra'

interface WrapperProps {
  children: ReactNode
  toc: Heading[]
}

const defaultComponents = getNextraComponents({
  wrapper({ children, toc }: WrapperProps) {
    return (
      <div className="flex">
        <div className="flex-1 max-w-none px-8 py-6">
          <article className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-purple-600 prose-strong:text-gray-900 prose-code:text-purple-700 prose-code:bg-purple-50 prose-pre:bg-gray-900 prose-pre:text-gray-100">
            <style dangerouslySetInnerHTML={{
              __html: `
                .prose {
                  color: #374151;
                  max-width: none;
                }
                .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                  color: #111827;
                  font-weight: 600;
                  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
                  background-clip: text;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                }
                .prose h1 {
                  font-size: 2.25rem;
                  margin-bottom: 1.5rem;
                }
                .prose h2 {
                  font-size: 1.875rem;
                  margin-top: 3rem;
                  border-bottom: 2px solid rgba(139, 92, 246, 0.2);
                  padding-bottom: 0.5rem;
                }
                .prose h3 {
                  font-size: 1.5rem;
                  margin-top: 2.5rem;
                }
                .prose code {
                  background: rgba(139, 92, 246, 0.1);
                  color: #7c3aed;
                  padding: 0.125rem 0.375rem;
                  border-radius: 0.375rem;
                  font-size: 0.875rem;
                  font-weight: 600;
                  border: 1px solid rgba(139, 92, 246, 0.2);
                }
                .prose pre {
                  background: #1f2937 !important;
                  color: #f9fafb !important;
                  padding: 1.5rem !important;
                  border-radius: 0.75rem !important;
                  overflow-x: auto !important;
                  border: 1px solid rgba(139, 92, 246, 0.3) !important;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
                }
                .prose pre code {
                  background: transparent !important;
                  color: inherit !important;
                  padding: 0 !important;
                  border: none !important;
                  font-size: 0.875rem !important;
                  font-weight: 400 !important;
                }
                .prose ul, .prose ol {
                  margin: 1.25rem 0;
                }
                .prose li {
                  margin: 0.5rem 0;
                  color: #4b5563;
                }
                .prose li::marker {
                  color: #8b5cf6;
                }
                .prose a {
                  color: #7c3aed;
                  text-decoration: none;
                  font-weight: 500;
                  transition: all 0.2s;
                }
                .prose a:hover {
                  color: #5b21b6;
                  text-decoration: underline;
                }
                .prose blockquote {
                  border-left: 4px solid #8b5cf6;
                  background: rgba(139, 92, 246, 0.05);
                  margin: 1.5rem 0;
                  padding: 1rem 1.5rem;
                  border-radius: 0 0.5rem 0.5rem 0;
                }
                .prose table {
                  border-collapse: collapse;
                  width: 100%;
                  margin: 1.5rem 0;
                  background: rgba(255, 255, 255, 0.8);
                  border-radius: 0.5rem;
                  overflow: hidden;
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                .prose th, .prose td {
                  padding: 0.75rem 1rem;
                  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
                }
                .prose th {
                  background: rgba(139, 92, 246, 0.1);
                  color: #7c3aed;
                  font-weight: 600;
                }
                .prose p {
                  margin: 1rem 0;
                  line-height: 1.7;
                  color: #4b5563;
                }
                .prose strong {
                  color: #111827;
                  font-weight: 600;
                }
                .prose em {
                  color: #6b7280;
                  font-style: italic;
                }
              `
            }} />
            {children}
          </article>
        </div>
        <TOC toc={toc} />
      </div>
    )
  }
})

export const useMDXComponents = (components?: any): any => ({
  ...defaultComponents,
  ...components
}) 