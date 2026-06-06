# CLAUDE.md

このリポジトリで作業する際のガイドです。Claude Code はこのファイルを毎セッション読み込みます。

## プロジェクト概要

Expo + TypeScript で構築する React Native モバイルアプリです。
（雛形はこれから作成します。スキャフォールド後にディレクトリ構成・主要モジュールをこのファイルへ追記してください。）

- **フレームワーク**: Expo (managed workflow)
- **言語**: TypeScript
- **パッケージマネージャ**: npm

## よく使うコマンド

| 目的 | コマンド |
|---|---|
| 開発サーバ起動 | `npm start` |
| iOS シミュレータ | `npm run ios` |
| Android エミュレータ | `npm run android` |
| Web | `npm run web` |
| 型チェック | `npx tsc --noEmit` |
| Lint | `npm run lint` |
| 依存追加 | `npm install <pkg>` / `npm install -D <pkg>` |

> スキャフォールド後、`package.json` の scripts に合わせて上記を更新すること。

## コーディング規約

- **TypeScript を厳格に**: `any` を避け、props や state に明示的な型を付ける。
- **関数コンポーネント + Hooks** で統一する（クラスコンポーネントは使わない）。
- **スタイル**: `StyleSheet.create` を使い、コンポーネントごとにまとめる。
- 既存コードがある場合は、その命名・import順・コメント密度に合わせる。

## 作業上の注意

- ベースブランチは **`main`**（`master` ではない）。
- 変更は新しいブランチを切ってから行い、PR ベースで進める。
- **commit / push は Claude が「勝手に」行わない**。PreToolUse フック（`.claude/hooks/block-git-write.sh`）が
  `git commit` / `git push` を検知すると確認プロンプト（ask）を出す。ユーザーが承認すれば実行される。
- パッケージマネージャは **npm**。yarn は使わない。
- 破壊的な操作（ファイル一括削除、force push 等）の前に必ず確認する。

## ディレクトリ構成（予定）

```
.
├── App.tsx              # エントリポイント
├── src/
│   ├── components/      # 再利用可能な UI コンポーネント
│   ├── screens/         # 画面単位のコンポーネント
│   ├── navigation/      # React Navigation 設定
│   ├── store/           # 状態管理
│   └── types/           # 共通型定義
└── assets/              # 画像・フォント等
```

> 実際の構成が固まったらこのセクションを更新すること。
