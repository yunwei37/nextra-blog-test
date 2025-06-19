'use client'

import React, { type FC, type ReactNode, useState, useEffect } from 'react'
import type { PageMapItem } from 'nextra'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'

const kawaiiBgImages = [
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center', // 樱花背景
  'https://images.unsplash.com/photo-1516641051054-9df6a1aad654?w=1920&h=1080&fit=crop&crop=center', // 粉色天空
  'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920&h=1080&fit=crop&crop=center', // 紫色渐变
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop&crop=center', // 彩虹色彩
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center'  // 柔和粉色
]

export const NextraTheme: FC<{
  children: ReactNode
  pageMap: PageMapItem[]
}> = ({ children, pageMap }) => {
  const [currentBg, setCurrentBg] = useState(0)
  const [showBgSelector, setShowBgSelector] = useState(false)
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])

  // 生成随机闪烁效果
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({length: 15}, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3
      }))
      setSparkles(newSparkles)
    }
    
    generateSparkles()
    const interval = setInterval(generateSparkles, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 动态背景 */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 192, 203, 0.3), rgba(255, 182, 193, 0.3)), url(${kawaiiBgImages[currentBg]})`,
          filter: 'blur(1px)'
        }}
      />
      
      {/* 闪烁装饰 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="absolute animate-bounce"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: '3s'
            }}
          >
            <div className="text-pink-300 text-xl animate-pulse">
              ✨
            </div>
          </div>
        ))}
        
        {/* 漂浮的心形装饰 */}
        <div className="animate-float-slow absolute top-10 left-10 text-pink-400 text-2xl">💕</div>
        <div className="animate-float-slower absolute top-32 right-20 text-purple-400 text-xl">🌸</div>
        <div className="animate-float absolute bottom-32 left-32 text-pink-300 text-lg">🎀</div>
        <div className="animate-float-slow absolute top-64 left-1/2 text-purple-300 text-xl">🦄</div>
        <div className="animate-float-slower absolute bottom-48 right-16 text-pink-400 text-lg">🌙</div>
      </div>

      {/* 背景选择器 */}
      <button
        onClick={() => setShowBgSelector(!showBgSelector)}
        className="fixed top-20 right-6 z-50 bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
          boxShadow: '0 8px 20px rgba(255, 154, 158, 0.3)'
        }}
      >
        <span className="text-lg">🎨</span>
      </button>

      {showBgSelector && (
        <div className="fixed top-20 right-20 z-50 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-pink-200">
          <h3 className="text-sm font-bold text-pink-600 mb-3 text-center">选择背景壁纸 (｡◕‿◕｡)</h3>
          <div className="grid grid-cols-3 gap-2">
            {kawaiiBgImages.map((bg, index) => (
              <button
                key={index}
                onClick={() => setCurrentBg(index)}
                className={`w-12 h-12 rounded-lg border-2 transition-all duration-300 ${
                  currentBg === index 
                    ? 'border-pink-400 shadow-lg scale-110' 
                    : 'border-pink-200 hover:border-pink-300'
                }`}
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 主要内容 */}
      <div className="relative z-10">
        {/* 可爱的顶部横幅 */}
        <header className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 shadow-lg border-b-4 border-white/50">
          <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white py-3 px-6">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <span className="text-sm font-bold flex items-center">
                <span className="mr-2 animate-bounce">🌟</span>
                Claude的可爱Nextra站点 - 二次元风格
                <span className="ml-2 animate-bounce">🌟</span>
              </span>
              <span className="text-xs opacity-90 flex items-center">
                <span className="mr-1">✨</span>
                萌萌哒 • 卡哇伊 • 超可爱
                <span className="ml-1">✨</span>
              </span>
            </div>
          </div>
          <Navbar pageMap={pageMap} />
        </header>

        {/* 主要布局 */}
        <div className="flex min-h-[calc(100vh-200px)]">
          <Sidebar pageMap={pageMap} />
          <main className="flex-1 bg-white/85 backdrop-blur-sm">
            <div className="max-w-none">
              {children}
            </div>
          </main>
        </div>

        {/* 底部 */}
        <Footer />
      </div>

      {/* 添加自定义CSS动画 */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
} 