import React, { type FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="glass-morphism-dark text-white/90 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">✦</span>
              </div>
              <span className="text-white font-semibold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Makoto Theme
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              一个充满梦幻色彩的静态站点生成器，基于 Next.js 构建，为创建美丽的文档和博客而生。
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/shuding/nextra" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/shuding_" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              📚 文档
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/docs" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">快速开始</a></li>
              <li><a href="/docs/installation" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">安装指南</a></li>
              <li><a href="/docs/configuration" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">配置选项</a></li>
              <li><a href="/docs/components" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">组件库</a></li>
            </ul>
          </div>

          {/* Examples */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              ✨ 示例
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/app" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">React 应用</a></li>
              <li><a href="/blog" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">博客示例</a></li>
              <li><a href="/showcase" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">展示案例</a></li>
              <li><a href="/templates" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">模板库</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              🌟 社区
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://discord.gg/hEM84NMkRv" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">Discord</a></li>
              <li><a href="https://github.com/shuding/nextra/discussions" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">讨论区</a></li>
              <li><a href="https://github.com/shuding/nextra/issues" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">问题反馈</a></li>
              <li><a href="/about" className="text-white/70 hover:text-white transition-colors duration-300 font-light hover:pl-2 transform">关于我们</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60 font-light">
              © {new Date().getFullYear()} Makoto Theme. 由{' '}
              <a href="https://nextjs.org" className="text-blue-300 hover:text-blue-200 transition-colors duration-300">
                Next.js
              </a>{' '}
              强力驱动
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">隐私政策</a>
              <span className="text-white/40">•</span>
              <a href="/terms" className="hover:text-white transition-colors duration-300">使用条款</a>
              <span className="text-white/40">•</span>
              <span className="flex items-center space-x-1">
                <span>用</span>
                <span className="text-pink-300 animate-pulse">💖</span>
                <span>制作</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 