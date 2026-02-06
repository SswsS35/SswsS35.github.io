
# MemoSync Web Application

## 功能特性 ✨
- [x] 多平台实时同步（PC / 移动端）
- [x] 文字编辑与即时保存
- [x] 图片插入展示（base64编码方式临时模拟）
- [x] 页面间通信机制（LocalStorage事件驱动）
- [x] 响应式 UI 设计（适配移动端）
- [x] 用户友好交互体验（模态反馈）

## 技术选型 💻
- **前端**: HTML5 + TailwindCSS + Vanilla JS
- **数据持久层**: `localStorage`
- **无需后端依赖即可运行**

## 如何开始 🧪
只需双击 index.html 即可直接运行！

> ⚠️ 注意事项:
由于使用了 LocalStorage API 进行跨 Tab 通讯，
此方法适用于现代浏览器环境（Chrome/Firefox/Safari最新版），
但在某些隐私模式下可能受限。

若想扩展远程同步功能，后续可接入 Firebase 或 WebSocket 方案。
