# 🌸 Claude的可爱二次元Nextra站点 ✨

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-ff69b4?style=for-the-badge&logo=love)
![Kawaii](https://img.shields.io/badge/kawaii-level_max-ff1493?style=for-the-badge&logo=heart)
![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)

**～(＾◡＾)～ 超可爱的二次元风格文档站点 ～(＾◡＾)～**

</div>

## 💕 项目简介

欢迎来到Claude的可爱世界！这是一个使用Nextra构建的超萌二次元风格文档站点，融合了粉色梦幻渐变、动态背景壁纸、可爱动画效果和中日文界面元素。

### ✨ 特色功能

- 🎨 **可爱主题设计** - 粉紫色渐变配色，满满少女心
- 🖼️ **动态背景壁纸** - 可切换的樱花、彩虹等梦幻背景
- 💫 **萌萌哒动画** - 浮动、闪烁、旋转的可爱装饰效果
- 🌸 **二次元UI元素** - emoji图标、圆角设计、渐变按钮
- 🎮 **交互式组件** - React待办事项应用示例
- 📚 **MDX支持** - Markdown与React组件完美融合
- 🌙 **响应式设计** - 在所有设备上都超可爱

## 🚀 快速开始

### 📦 安装依赖

```bash
# 克隆这个可爱的项目
git clone <repository-url>
cd nextra-blog-test

# 安装依赖 (超简单的说～)
npm install
```

### 🛠️ 开发模式

```bash
# 启动开发服务器 (准备好被萌到了吗？)
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 就能看到可爱的站点了！

### 🏗️ 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

## 🎨 主要特性

### 🌸 可爱的视觉设计

- **色彩方案** - 以粉色、紫色、靛蓝色为主的梦幻渐变
- **字体设计** - 渐变文字、动画效果、emoji装饰
- **布局风格** - 圆角卡片、阴影效果、透明度叠加
- **装饰元素** - 浮动的心形、星星、独角兽等可爱符号

### 🖼️ 背景壁纸系统

- **多种选择** - 樱花、粉色天空、紫色渐变、彩虹色彩
- **一键切换** - 点击右上角画笔按钮切换背景
- **动态效果** - 轻微模糊和粉色叠加效果
- **持久化** - 背景选择会保存在浏览器中

### ✨ 动画效果

- **浮动动画** - 装饰元素的上下浮动
- **闪烁效果** - 星星、心形的闪烁动画
- **悬停效果** - 按钮和链接的缩放、旋转效果
- **过渡动画** - 所有状态变化的平滑过渡

### 🧩 组件系统

- **导航栏** - 可爱的logo、渐变按钮、emoji图标
- **侧边栏** - 展开/收起动画、活跃状态指示
- **页脚** - 社交链接、版权信息、装饰元素
- **内容区** - MDX渲染、目录导航、搜索功能

## 📁 项目结构

```
├── app/
│   ├── _components/        # 🧩 可爱组件库
│   │   ├── nextra-theme.tsx   # 🎨 主题容器
│   │   ├── navbar.tsx         # 🌙 顶部导航
│   │   ├── sidebar.tsx        # 📚 侧边栏
│   │   ├── footer.tsx         # 💝 页脚
│   │   └── toc.tsx           # 📄 目录
│   ├── docs/              # 📖 文档区域
│   ├── app/               # 🎮 React应用示例
│   ├── blog/              # ✍️ 博客示例
│   ├── about/             # 💕 关于页面
│   ├── layout.tsx         # 🏠 根布局
│   ├── page.tsx          # 🌸 首页
│   └── _meta.ts          # 📋 导航配置
├── mdx-components.tsx     # 🔧 MDX配置
├── next.config.mjs       # ⚙️ Next.js配置
├── tsconfig.json         # 📝 TypeScript配置
└── package.json          # 📦 依赖管理
```

## 🛠️ 技术栈

- **框架** - Next.js 15 + Nextra 4
- **语言** - TypeScript
- **样式** - Tailwind CSS
- **内容** - MDX (Markdown + JSX)
- **部署** - Vercel / Netlify

## 🎨 自定义指南

### 🌈 修改颜色主题

在组件中查找并修改以下CSS类：

```css
/* 主要颜色 */
from-pink-400 to-purple-400    /* 粉紫渐变 */
from-purple-400 to-indigo-400  /* 紫靛渐变 */
text-pink-600                  /* 粉色文字 */
bg-pink-50                     /* 粉色背景 */
```

### 🖼️ 添加新背景

在 `app/_components/nextra-theme.tsx` 中的 `kawaiiBgImages` 数组添加新的图片URL：

```typescript
const kawaiiBgImages = [
  // ... 现有背景
  'https://your-new-background-url.jpg'  // 新背景
]
```

### ✨ 自定义动画

在组件中添加新的动画类：

```typescript
// 自定义动画
.animate-float-custom {
  animation: float-custom 5s ease-in-out infinite;
}

@keyframes float-custom {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(10deg); }
}
```

## 🌟 贡献指南

欢迎为这个可爱的项目做贡献！

1. 🍴 Fork 这个项目
2. 🌱 创建你的功能分支 (`git checkout -b feature/kawaii-feature`)
3. 💖 提交你的改动 (`git commit -m '添加一些可爱的功能'`)
4. 🚀 推送到分支 (`git push origin feature/kawaii-feature`)
5. 🎉 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Nextra](https://nextra.site/) - 强大的文档框架
- [Next.js](https://nextjs.org/) - 优秀的React框架
- [Tailwind CSS](https://tailwindcss.com/) - 实用的CSS框架
- [Unsplash](https://unsplash.com/) - 美丽的背景图片

---

<div align="center">

**～(＾◡＾)～ 用爱心制作，使用Claude的Nextra ～(＾◡＾)～**

[![Made with Love](https://img.shields.io/badge/Made%20with-💕-ff69b4?style=for-the-badge)](https://github.com/)
[![Powered by Nextra](https://img.shields.io/badge/Powered%20by-Nextra-black?style=for-the-badge)](https://nextra.site/)

🌸 希望这个可爱的世界能给你带来快乐！ 🌸

</div>