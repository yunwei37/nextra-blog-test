import React, { type ReactNode } from 'react'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { NextraTheme } from './_components/nextra-theme'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Nextra Custom Theme',
    template: '%s - Nextra'
  },
  description: 'A custom Nextra theme with React and MDX support'
}

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps): Promise<React.ReactElement> {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            
            * {
              box-sizing: border-box;
            }
            
            html, body {
              margin: 0;
              padding: 0;
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              overflow-x: hidden;
            }
            
            body {
              background: url('/background.jpg') center/cover fixed, 
                          linear-gradient(135deg, 
                            rgba(59, 130, 246, 0.2) 0%, 
                            rgba(147, 51, 234, 0.3) 25%, 
                            rgba(236, 72, 153, 0.15) 50%, 
                            rgba(245, 158, 11, 0.25) 75%, 
                            rgba(6, 182, 212, 0.2) 100%);
              min-height: 100vh;
              position: relative;
            }
            
            /* 强化背景效果 - 提高透明度 */
            body::before {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('/background.jpg') center/cover fixed;
              opacity: 0.9;
              z-index: -10;
              filter: brightness(1.1) contrast(1.05);
            }
            
            body::after {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                45deg,
                rgba(59, 130, 246, 0.08) 0%,
                rgba(147, 51, 234, 0.12) 25%,
                rgba(236, 72, 153, 0.06) 50%,
                rgba(245, 158, 11, 0.1) 75%,
                rgba(6, 182, 212, 0.08) 100%
              );
              z-index: -9;
              animation: colorShift 10s ease-in-out infinite;
            }
            
            @keyframes colorShift {
              0%, 100% {
                background: linear-gradient(
                  45deg,
                  rgba(59, 130, 246, 0.08) 0%,
                  rgba(147, 51, 234, 0.12) 25%,
                  rgba(236, 72, 153, 0.06) 50%,
                  rgba(245, 158, 11, 0.1) 75%,
                  rgba(6, 182, 212, 0.08) 100%
                );
              }
              33% {
                background: linear-gradient(
                  45deg,
                  rgba(147, 51, 234, 0.1) 0%,
                  rgba(236, 72, 153, 0.08) 25%,
                  rgba(245, 158, 11, 0.15) 50%,
                  rgba(6, 182, 212, 0.12) 75%,
                  rgba(59, 130, 246, 0.1) 100%
                );
              }
              66% {
                background: linear-gradient(
                  45deg,
                  rgba(236, 72, 153, 0.1) 0%,
                  rgba(245, 158, 11, 0.12) 25%,
                  rgba(6, 182, 212, 0.08) 50%,
                  rgba(59, 130, 246, 0.15) 75%,
                  rgba(147, 51, 234, 0.09) 100%
                );
              }
            }
            
            /* 新海诚风格的光效 */
            .makoto-light {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: 
                radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 25%),
                radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.06) 0%, transparent 20%),
                radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.04) 0%, transparent 15%);
              z-index: -8;
              animation: lightFloat 15s infinite ease-in-out;
            }
            
            @keyframes lightFloat {
              0%, 100% {
                background: 
                  radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 25%),
                  radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.06) 0%, transparent 20%),
                  radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.04) 0%, transparent 15%);
              }
              50% {
                background: 
                  radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 30%),
                  radial-gradient(circle at 20% 60%, rgba(147, 51, 234, 0.08) 0%, transparent 25%),
                  radial-gradient(circle at 60% 20%, rgba(236, 72, 153, 0.06) 0%, transparent 20%);
              }
            }
            
            .glass-morphism {
              background: rgba(255, 255, 255, 0.55) !important;
              backdrop-filter: blur(12px) saturate(1.4) !important;
              border: 1px solid rgba(255, 255, 255, 0.4) !important;
              box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.6) !important;
            }
            
            .glass-morphism-dark {
              background: rgba(15, 23, 42, 0.75) !important;
              backdrop-filter: blur(12px) saturate(1.4) !important;
              border: 1px solid rgba(255, 255, 255, 0.2) !important;
              box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
            }
          `
        }} />
      </Head>
      <body style={{ margin: 0 }}>
        <div className="makoto-light"></div>
        <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
      </body>
    </html>
  )
} 