# CLAUDE.md

このリポジトリで作業する際のガイドです。Claude Code はこのファイルを毎セッション読み込みます。

## プロジェクト概要

Expo + TypeScript で構築する React Native モバイルアプリです。
（雛形はこれから作成します。スキャフォールド後にディレクトリ構成・主要モジュールをこのファイルへ追記してください。）

- **フレームワーク**: Expo (managed workflow)
- **言語**: TypeScript
- **パッケージマネージャ**: yarn

## よく使うコマンド

| 目的 | コマンド |
|---|---|
| 開発サーバ起動 | `yarn start` |
| iOS シミュレータ | `yarn ios` |
| Android エミュレータ | `yarn android` |
| Web | `yarn web` |
| 型チェック | `yarn tsc --noEmit` |
| Lint | `yarn lint` |
| 依存追加 | `yarn add <pkg>` / `yarn add -D <pkg>` |

> スキャフォールド後、`package.json` の scripts に合わせて上記を更新すること。

## コーディング規約

- **TypeScript を厳格に**: `any` を避け、props や state に明示的な型を付ける。
- **関数コンポーネント + Hooks** で統一する（クラスコンポーネントは使わない）。
- **スタイル**: `StyleSheet.create` を使い、コンポーネントごとにまとめる。
- 既存コードがある場合は、その命名・import順・コメント密度に合わせる。

## 作業上の注意

- ベースブランチは **`main`**（`master` ではない）。
- 変更は新しいブランチを切ってから行い、PR ベースで進める。
- コミットメッセージは簡潔な現在形で。
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
