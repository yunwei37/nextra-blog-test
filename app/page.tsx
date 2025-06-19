import React from 'react'

export default function HomePage(): React.ReactElement {
  return (
    <div className="px-8 py-6">
      <div className="text-center py-12">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to Nextra
        </h1>
        <div className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
          A powerful static site generator built on top of Next.js that makes creating beautiful documentation and blogs effortless.
        </div>
      </div>

      <div className="py-8">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <span className="text-2xl mr-2">🎉</span>
          <strong>New in Nextra 4.0</strong> - Enhanced performance, better TypeScript support, and improved developer experience!
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">✨ Why Choose Nextra?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Blazing Fast</h3>
          <p className="text-gray-600">Built on Next.js with optimal performance, server-side rendering, and static generation out of the box.</p>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">📝</div>
          <h3 className="text-xl font-semibold mb-2">MDX Powered</h3>
          <p className="text-gray-600">Write content in Markdown with full React component support. Mix documentation with interactive elements seamlessly.</p>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Beautiful Themes</h3>
          <p className="text-gray-600">Choose from stunning built-in themes or create your own. Fully customizable and mobile-responsive design.</p>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">🔍</div>
          <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
          <p className="text-gray-600">Built-in full-text search powered by Flexsearch. Find content instantly with intelligent indexing.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">🚀 Key Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Developer Experience</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Zero Configuration</strong> - Get started in minutes with sensible defaults</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Hot Reload</strong> - See changes instantly during development</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>TypeScript Ready</strong> - Full TypeScript support with type checking</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Git Integration</strong> - Automatic edit links and last updated timestamps</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Content Management</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>File-based Routing</strong> - Organize content with simple file and folder structure</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Automatic Navigation</strong> - Generate navigation from your content structure</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Multi-language Support</strong> - Built-in internationalization (i18n) support</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>SEO Optimized</strong> - Automatic meta tags, sitemap, and Open Graph support</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">🎯 Perfect For</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
          <h3 className="text-xl font-semibold mb-3">📚 Documentation Sites</h3>
          <div className="text-gray-600">Create comprehensive documentation with beautiful navigation, search, and organization.</div>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
          <h3 className="text-xl font-semibold mb-3">✍️ Technical Blogs</h3>
          <div className="text-gray-600">Share knowledge with syntax highlighting, interactive examples, and engaging layouts.</div>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50">
          <h3 className="text-xl font-semibold mb-3">🏢 Product Guides</h3>
          <div className="text-gray-600">Build user guides, API references, and knowledge bases that users love.</div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">🛠️ Quick Start</h2>
      
      <p className="mb-4">Get your Nextra site running in under 5 minutes:</p>

      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-8">
        <pre className="text-sm">
{`# Install dependencies
npm i next react react-dom nextra nextra-theme-docs

# Create configuration
echo 'import nextra from "nextra"
export default nextra()()' > next.config.mjs

# Start developing
npm run dev`}
        </pre>
      </div>

      <div className="text-center py-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <div className="text-gray-600 mb-6">Explore our comprehensive documentation and start building amazing content experiences.</div>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="/docs" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            View Documentation
          </a>
          <a 
            href="/docs/installation" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors inline-block"
          >
            Installation Guide
          </a>
        </div>
      </div>

      <hr className="my-8" />

      <div className="text-center text-gray-500 text-sm">
        Built with ❤️ using Nextra • <a href="https://github.com/shuding/nextra" className="text-blue-600 hover:underline">View Source</a> • <a href="https://discord.gg/hEM84NMkRv" className="text-blue-600 hover:underline">Join Community</a>
      </div>
    </div>
  )
} 