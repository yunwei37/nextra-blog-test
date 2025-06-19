import React, { type ReactNode } from 'react'
import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { TOC } from './app/_components/toc'
import type { Heading } from 'nextra'
import type { MDXComponents } from 'mdx/types'

interface WrapperProps {
  children: ReactNode
  toc: Heading[]
}

const defaultComponents = getNextraComponents({
  wrapper({ children, toc }: WrapperProps) {
    return (
      <div className="flex">
        <div className="flex-1 max-w-none px-8 py-6">
          <article className="prose prose-gray max-w-none">
            {children}
          </article>
        </div>
        <TOC toc={toc} />
      </div>
    )
  }
})

export const useMDXComponents = (components?: MDXComponents): MDXComponents => ({
  ...defaultComponents,
  ...components
}) 