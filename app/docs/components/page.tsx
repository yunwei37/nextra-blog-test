'use client'

import React from 'react'

export default function ComponentsPage(): React.ReactElement {
  return (
    <div className="px-8 py-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Built-in Components</h1>
        <p className="text-lg text-gray-600 mb-8">
          This page demonstrates various components and features available in Nextra with TypeScript.
        </p>

        {/* Callouts Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Callouts</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-blue-400 text-lg">ℹ️</span>
                </div>
                <div className="ml-3">
                  <p className="text-blue-800 font-medium">Info</p>
                  <p className="text-blue-700">This is an information callout implemented in TypeScript React.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-yellow-400 text-lg">⚠️</span>
                </div>
                <div className="ml-3">
                  <p className="text-yellow-800 font-medium">Warning</p>
                  <p className="text-yellow-700">This is a warning callout with proper TypeScript typing.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-green-400 text-lg">✅</span>
                </div>
                <div className="ml-3">
                  <p className="text-green-800 font-medium">Success</p>
                  <p className="text-green-700">This is a success callout showing TypeScript integration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Code Examples</h2>
          
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm">
              <code>{`// TypeScript React Component Example
interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={\`px-4 py-2 rounded-lg font-medium transition-colors \${
        variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }\`}
    >
      {children}
    </button>
  )
}`}</code>
            </pre>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Demo</h2>
          
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">TypeScript Button Components</h3>
            <div className="flex space-x-4 mb-4">
              <button 
                onClick={() => alert('Primary button clicked!')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Primary Button
              </button>
              <button 
                onClick={() => alert('Secondary button clicked!')}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Secondary Button
              </button>
            </div>
            <p className="text-sm text-purple-700">
              These buttons are fully typed TypeScript components with proper event handling.
            </p>
          </div>
        </section>

        {/* Features Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">TypeScript Support</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Full TypeScript integration with type checking</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">React Components</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Interactive React components in documentation</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">MDX Support</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Markdown with embedded React components</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Custom Themes</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fully customizable theme system</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Pro Tips</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Use TypeScript interfaces for better component prop typing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Combine React components with MDX for interactive documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Custom themes provide complete design control</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Both .tsx and .mdx files work seamlessly together</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="text-center text-gray-500 text-sm">
          This page demonstrates TypeScript React components working seamlessly with the custom Nextra theme.
        </div>
      </div>
    </div>
  )
} 