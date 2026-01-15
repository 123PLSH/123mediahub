# MediaHub 防丢失媒体分享网站

一个简洁美观的静态媒体分享网站，可通过 GitHub Pages 或 Cloudflare Pages 部署。

## 功能特性

- 🎬 简洁美观的界面设计
- 📱 响应式布局，支持移动端
- 🚀 纯静态页面，加载速度快
- 🔗 稳定的媒体资源访问链接

## 部署方式

### GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择主分支作为源
4. 访问 `https://你的用户名.github.io/仓库名`

### Cloudflare Pages

1. 将代码推送到 GitHub 仓库
2. 登录 Cloudflare Dashboard
3. 进入 Pages 部分，点击"创建项目"
4. 连接 GitHub 仓库
5. 构建设置：
   - 构建命令：留空（静态网站无需构建）
   - 构建输出目录：`/`（根目录）
6. 点击"保存并部署"

## 项目结构

```
.
├── index.html          # 主页面文件
├── README.md          # 项目说明
└── .gitignore         # Git 忽略文件
```

## 本地预览

直接在浏览器中打开 `index.html` 文件即可预览。

## 许可证

MIT License
