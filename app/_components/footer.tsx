import React, { type FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-pink-900 via-purple-900 to-indigo-900 text-pink-100 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-4 animate-bounce text-pink-300 text-2xl">✨</div>
        <div className="absolute top-8 right-12 animate-pulse text-purple-300 text-xl">🌸</div>
        <div className="absolute bottom-8 left-16 animate-bounce text-indigo-300 text-lg">💫</div>
        <div className="absolute bottom-4 right-8 animate-pulse text-pink-300 text-xl">🦄</div>
        <div className="absolute top-1/2 left-1/4 animate-ping text-purple-400 text-sm">⭐</div>
        <div className="absolute top-1/3 right-1/3 animate-bounce text-pink-400 text-sm">💕</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 可爱的品牌区域 */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white font-bold text-lg">🌸</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full animate-bounce"></div>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Claude's Kawaii Nextra
              </span>
            </div>
            <p className="text-sm text-pink-200 leading-relaxed">
              <span className="font-bold text-pink-300">✨ 超可爱的静态网站生成器 ✨</span><br/>
              基于Next.js构建，让创建美丽文档和博客变得萌萌哒！
              带给你前所未有的开发体验～
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/shuding/nextra" className="group text-pink-300 hover:text-white transition-all duration-300 transform hover:scale-110">
                <div className="relative">
                  <svg className="w-6 h-6 group-hover:animate-spin" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute -top-1 -right-1 text-xs">🐙</span>
                </div>
              </a>
              <a href="https://twitter.com/shuding_" className="group text-purple-300 hover:text-white transition-all duration-300 transform hover:scale-110">
                <div className="relative">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="absolute -top-1 -right-1 text-xs">🐦</span>
                </div>
              </a>
            </div>
          </div>

          {/* 文档导航 */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg flex items-center">
              <span className="mr-2 text-xl animate-bounce">📚</span>
              文档导航
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/docs" className="group text-pink-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-pulse">🌸</span>
                  快速开始
                </a>
              </li>
              <li>
                <a href="/docs/installation" className="group text-pink-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-pulse">⚙️</span>
                  安装指南
                </a>
              </li>
              <li>
                <a href="/docs/configuration" className="group text-pink-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-pulse">🔧</span>
                  配置说明
                </a>
              </li>
              <li>
                <a href="/docs/components" className="group text-pink-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-pulse">🧩</span>
                  内置组件
                </a>
              </li>
            </ul>
          </div>

          {/* 示例展示 */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg flex items-center">
              <span className="mr-2 text-xl animate-pulse">✨</span>
              示例展示
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/app" className="group text-purple-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-bounce">🎮</span>
                  React应用
                </a>
              </li>
              <li>
                <a href="/blog" className="group text-purple-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-bounce">✍️</span>
                  博客示例
                </a>
              </li>
              <li>
                <a href="/showcase" className="group text-purple-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-bounce">🏆</span>
                  作品展示
                </a>
              </li>
              <li>
                <a href="/templates" className="group text-purple-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-bounce">🎨</span>
                  模板库
                </a>
              </li>
            </ul>
          </div>

          {/* 社区互动 */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg flex items-center">
              <span className="mr-2 text-xl animate-bounce">💕</span>
              社区互动
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://discord.gg/hEM84NMkRv" className="group text-indigo-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-pulse">💬</span>
                  Discord社群
                </a>
              </li>
              <li>
                <a href="https://github.com/shuding/nextra/discussions" className="group text-indigo-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-pulse">💭</span>
                  讨论区
                </a>
              </li>
              <li>
                <a href="https://github.com/shuding/nextra/issues" className="group text-indigo-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-pulse">🐛</span>
                  问题反馈
                </a>
              </li>
              <li>
                <a href="/about" className="group text-indigo-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 group-hover:animate-pulse">💝</span>
                  关于我们
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部分隔线和信息 */}
        <div className="mt-12 pt-8 border-t-2 border-gradient-to-r from-pink-400 to-purple-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm text-pink-200 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <span className="animate-pulse">©</span>
                <span>{new Date().getFullYear()}</span>
                <span className="font-bold text-pink-300">Claude's Kawaii Nextra</span>
                <span className="animate-bounce">♡</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span>由</span>
                <a href="https://nextjs.org" className="text-pink-300 hover:text-white transition-colors font-bold">
                  Next.js
                </a>
                <span>强力驱动</span>
                <span className="animate-pulse">⚡</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-pink-200">
              <a href="/privacy" className="hover:text-white transition-colors flex items-center">
                <span className="mr-1">🔒</span>
                隐私政策
              </a>
              <span className="text-purple-400">•</span>
              <a href="/terms" className="hover:text-white transition-colors flex items-center">
                <span className="mr-1">📋</span>
                使用条款
              </a>
              <span className="text-purple-400">•</span>
              <span className="flex items-center">
                <span className="mr-1">用</span>
                <span className="text-pink-300 animate-pulse">♡</span>
                <span className="ml-1">制作</span>
              </span>
            </div>
          </div>
        </div>

        {/* 可爱的装饰元素 */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-4 text-2xl">
            <span className="animate-bounce" style={{animationDelay: '0s'}}>🌸</span>
            <span className="animate-bounce" style={{animationDelay: '0.2s'}}>💕</span>
            <span className="animate-bounce" style={{animationDelay: '0.4s'}}>🌙</span>
            <span className="animate-bounce" style={{animationDelay: '0.6s'}}>✨</span>
            <span className="animate-bounce" style={{animationDelay: '0.8s'}}>🦄</span>
            <span className="animate-bounce" style={{animationDelay: '1s'}}>💫</span>
          </div>
          <p className="mt-4 text-pink-300 text-sm font-medium">
            ～(＾◡＾)～ 感谢你访问Claude的可爱世界！～(＾◡＾)～
          </p>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Nextra. Powered by{' '}
              <a href="https://nextjs.org" className="text-blue-400 hover:text-blue-300 transition-colors">
                Next.js
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <span>•</span>
              <span>Built with ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 