## はじめに

React Routerで遊ぶ用に作成しました

特にアプリとしての価値はありません

## フォルダ構成

```
/ (プロジェクトルート)
├── app/                # アプリケーションの主要コード
│   ├── components/     # Reactコンポーネント
│   ├── routes/         # ルーティング関連ファイル
│   └── styles/         # スタイルシート
├── public/             # 公開用静的ファイル
├── build/              # ビルド成果物
├── node_modules/       # 依存パッケージ
├── package.json        # プロジェクト設定
└── README.md           # このファイル

routesについて
├── _index.tsx          # ホーム
├── children.tsx        # 子ページ
├── children.test2.tsx  # 子ページ内に表示する要素（ネストルート）
├── test1.tsx           # ページ1
```

## 検証したいこと

- Reduxの必要性
- shadcn/uiとの親和性
- 状態管理周りについてuseStateなどとの差

---

以下、元README.mdより

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
