import React from 'react'

export default function HomePage(): React.ReactElement {
  return (
    <div className="px-8 py-6 relative">
      {/* 可爱的标题区域 */}
      <div className="text-center py-12 relative">
        {/* 装饰性元素 */}
        <div className="absolute top-4 left-1/4 animate-bounce text-pink-400 text-2xl">🌸</div>
        <div className="absolute top-8 right-1/3 animate-pulse text-purple-400 text-xl">✨</div>
        <div className="absolute bottom-4 left-1/3 animate-bounce text-indigo-400 text-lg">💫</div>
        <div className="absolute bottom-8 right-1/4 animate-pulse text-pink-400 text-xl">🦄</div>
        
        <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          欢迎来到Claude的
        </h1>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          可爱二次元世界 ♡
        </h2>
        <div className="text-xl text-pink-600 mt-6 max-w-3xl mx-auto leading-relaxed">
          <span className="font-bold">～(＾◡＾)～</span> 这里是一个超可爱的静态网站生成器，
          基于Next.js构建，让创建美丽的文档和博客变得萌萌哒！
          <span className="font-bold">～(＾◡＾)～</span>
        </div>
        
        {/* 可爱的装饰线 */}
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* 新功能横幅 */}
      <div className="py-8">
        <div className="p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 border-2 border-pink-300 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-2 right-2 animate-spin-slow">
            <span className="text-3xl">🌟</span>
          </div>
          <div className="flex items-center">
            <span className="text-4xl mr-4 animate-bounce">🎉</span>
            <div>
              <strong className="text-pink-700 text-lg">Claude的Nextra 4.0来啦！</strong>
              <span className="text-purple-600 ml-2">- 更强的性能，更好的TypeScript支持，更可爱的开发体验！</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        ✨ 为什么选择Claude的可爱Nextra？ ✨
      </h2>

      {/* 特性卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="group p-6 border-2 border-pink-200 rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
          <div className="text-5xl mb-4 text-center group-hover:animate-bounce">⚡</div>
          <h3 className="text-xl font-bold mb-3 text-pink-700">超快速度</h3>
          <p className="text-pink-600">基于Next.js构建，拥有服务端渲染和静态生成的超能力！萌萌哒性能优化～</p>
          <div className="mt-4 flex justify-center space-x-1">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
          </div>
        </div>
        
        <div className="group p-6 border-2 border-purple-200 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
          <div className="text-5xl mb-4 text-center group-hover:animate-spin">📝</div>
          <h3 className="text-xl font-bold mb-3 text-purple-700">MDX魔法</h3>
          <p className="text-purple-600">在Markdown中使用React组件！让你的内容既可爱又强大～写文档从未如此有趣！</p>
          <div className="mt-4 text-center">
            <span className="inline-block px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-bold animate-pulse">
              🌸 MDX Magic
            </span>
          </div>
        </div>
        
        <div className="group p-6 border-2 border-indigo-200 rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
          <div className="text-5xl mb-4 text-center group-hover:animate-pulse">🎨</div>
          <h3 className="text-xl font-bold mb-3 text-indigo-700">美丽主题</h3>
          <p className="text-indigo-600">选择超可爱的内置主题或创建你自己的！完全可定制的响应式设计，让每个页面都萌萌哒～</p>
          <div className="mt-4 flex justify-center">
            <div className="w-8 h-2 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="group p-6 border-2 border-green-200 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
          <div className="text-5xl mb-4 text-center group-hover:animate-bounce">🔍</div>
          <h3 className="text-xl font-bold mb-3 text-green-700">智能搜索</h3>
          <p className="text-green-600">内置的全文搜索功能！基于Flexsearch的智能索引，让用户瞬间找到想要的内容～</p>
          <div className="mt-4 text-center">
            <span className="text-2xl animate-ping">💫</span>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        🚀 超可爱的核心功能
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-pink-700 flex items-center">
            <span className="mr-3 text-3xl animate-bounce">👩‍💻</span>
            开发者体验
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <span className="text-pink-500 mr-3 text-xl group-hover:animate-spin">✓</span>
              <span><strong className="text-pink-700">零配置启动</strong> - 几分钟内就能开始，简单到让人想哭！(╥﹏╥)</span>
            </li>
            <li className="flex items-start group">
              <span className="text-pink-500 mr-3 text-xl group-hover:animate-bounce">✓</span>
              <span><strong className="text-pink-700">热重载</strong> - 开发时看到实时变化，就像魔法一样～</span>
            </li>
            <li className="flex items-start group">
              <span className="text-pink-500 mr-3 text-xl group-hover:animate-pulse">✓</span>
              <span><strong className="text-pink-700">TypeScript支持</strong> - 完整的类型检查，让代码更安全更可爱♡</span>
            </li>
            <li className="flex items-start group">
              <span className="text-pink-500 mr-3 text-xl group-hover:animate-spin">✓</span>
              <span><strong className="text-pink-700">Git集成</strong> - 自动编辑链接和更新时间戳，贴心得不要不要的～</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-purple-700 flex items-center">
            <span className="mr-3 text-3xl animate-pulse">📖</span>
            内容管理
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <span className="text-purple-500 mr-3 text-xl group-hover:animate-bounce">✓</span>
              <span><strong className="text-purple-700">文件路由</strong> - 用简单的文件夹结构组织内容，直观到爆！</span>
            </li>
            <li className="flex items-start group">
              <span className="text-purple-500 mr-3 text-xl group-hover:animate-pulse">✓</span>
              <span><strong className="text-purple-700">自动导航</strong> - 从内容结构自动生成导航，智能得让人感动</span>
            </li>
            <li className="flex items-start group">
              <span className="text-purple-500 mr-3 text-xl group-hover:animate-spin">✓</span>
              <span><strong className="text-purple-700">多语言支持</strong> - 内置国际化(i18n)支持，让全世界都能感受到可爱</span>
            </li>
            <li className="flex items-start group">
              <span className="text-purple-500 mr-3 text-xl group-hover:animate-bounce">✓</span>
              <span><strong className="text-purple-700">SEO优化</strong> - 自动meta标签、站点地图和Open Graph支持</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
        🎯 最适合用来做什么呢？
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="group p-8 border-2 border-blue-200 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <div className="text-center mb-6">
            <span className="text-6xl group-hover:animate-bounce">📚</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-blue-700 text-center">文档网站</h3>
          <div className="text-blue-600 text-center">创建全面的文档，美丽的导航，搜索功能，组织得井井有条～让用户爱上阅读文档！</div>
        </div>
        
        <div className="group p-8 border-2 border-purple-200 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <div className="text-center mb-6">
            <span className="text-6xl group-hover:animate-pulse">✍️</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-purple-700 text-center">技术博客</h3>
          <div className="text-purple-600 text-center">分享知识与见解，语法高亮，交互示例，引人入胜的布局，让每篇文章都闪闪发光～</div>
        </div>
        
        <div className="group p-8 border-2 border-green-200 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <div className="text-center mb-6">
            <span className="text-6xl group-hover:animate-spin">🏢</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">产品指南</h3>
          <div className="text-green-600 text-center">构建用户指南、API参考、知识库，让用户爱不释手的那种～</div>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        🛠️ 超快速启动指南
      </h2>
      
      <p className="mb-6 text-center text-pink-600 text-lg font-medium">让你的Claude风格Nextra站点在5分钟内运行起来：</p>

      <div className="bg-gray-900 text-gray-100 p-8 rounded-3xl mb-12 relative overflow-hidden border-4 border-pink-300">
        <div className="absolute top-4 right-4 animate-pulse">
          <span className="text-pink-400 text-2xl">💖</span>
        </div>
        <pre className="text-sm leading-relaxed">
{`# 安装依赖 (超简单的说～)
npm i next react react-dom nextra nextra-theme-docs

# 创建配置文件 (一行搞定！)
echo 'import nextra from "nextra"
export default nextra()()' > next.config.mjs

# 开始开发 (准备好被萌到了吗？)
npm run dev`}
        </pre>
      </div>

      {/* CTA区域 */}
      <div className="text-center py-16 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-3xl mb-12 relative overflow-hidden border-4 border-pink-200">
        <div className="absolute top-4 left-4 animate-bounce">
          <span className="text-4xl">🌸</span>
        </div>
        <div className="absolute top-4 right-4 animate-pulse">
          <span className="text-4xl">✨</span>
        </div>
        <div className="absolute bottom-4 left-1/4 animate-bounce" style={{animationDelay: '0.5s'}}>
          <span className="text-3xl">💕</span>
        </div>
        <div className="absolute bottom-4 right-1/4 animate-pulse" style={{animationDelay: '1s'}}>
          <span className="text-3xl">🦄</span>
        </div>
        
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          准备好开始了吗？
        </h2>
        <div className="text-pink-600 mb-8 text-lg font-medium">
          探索我们的全面文档，开始构建令人惊叹的内容体验吧～
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <a 
            href="/docs" 
            className="group bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg border-2 border-white/50"
          >
            <span className="flex items-center space-x-2">
              <span className="group-hover:animate-bounce">📚</span>
              <span>查看文档</span>
            </span>
          </a>
          <a 
            href="/docs/installation" 
            className="group bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold border-2 border-pink-500 hover:bg-pink-50 transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <span className="flex items-center space-x-2">
              <span className="group-hover:animate-pulse">⚙️</span>
              <span>安装指南</span>
            </span>
          </a>
        </div>
      </div>

      <hr className="my-8 border-2 border-pink-200" />

      <div className="text-center text-pink-500 text-sm py-6">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <span className="animate-bounce">🌸</span>
          <span>用</span>
          <span className="text-pink-600 font-bold animate-pulse">♡ 爱心 ♡</span>
          <span>制作，使用Claude的Nextra</span>
          <span className="animate-bounce">🌸</span>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/shuding/nextra" className="text-pink-600 hover:text-purple-600 hover:underline transition-colors font-medium">
            <span className="mr-1">🐙</span>查看源码
          </a>
          <span className="text-pink-400">•</span>
          <a href="https://discord.gg/hEM84NMkRv" className="text-pink-600 hover:text-purple-600 hover:underline transition-colors font-medium">
            <span className="mr-1">💬</span>加入社区
          </a>
        </div>
      </div>
    </div>
  )
} 