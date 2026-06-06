# CLAUDE.md

このリポジトリで作業する際のガイドです。Claude Code はこのファイルを毎セッション読み込みます。

## プロジェクト概要

Expo + TypeScript で構築する React Native モバイルアプリです。
`create-expo-app`（blank-typescript テンプレート）で雛形を作成済み。

- **フレームワーク**: Expo SDK **56**（managed workflow）
- **言語**: TypeScript（strict）/ React 19・React Native 0.85
- **パッケージマネージャ**: npm
- **エントリ**: `index.ts` が `App.tsx` を `registerRootComponent` で登録

> Expo は破壊的変更が多い。コードを書く前に対象バージョンの公式ドキュメント
> （https://docs.expo.dev/versions/v56.0.0/ ）を確認すること（`AGENTS.md` 参照）。

## よく使うコマンド

| 目的 | コマンド |
|---|---|
| 開発サーバ起動 | `npm start` |
| iOS シミュレータ | `npm run ios` |
| Android エミュレータ | `npm run android` |
| Web | `npm run web` |
| 型チェック | `npx tsc --noEmit` |
| 依存追加 | `npm install <pkg>` / `npm install -D <pkg>` |

> Lint は未導入（`package.json` の scripts に `lint` は無い）。導入したらこの表に追記すること。

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

## ディレクトリ構成

現状（スキャフォールド直後のフラット構成）:

```
.
├── index.ts             # エントリ（App を registerRootComponent で登録）
├── App.tsx              # ルートコンポーネント（ここから実装を始める）
├── app.json             # Expo 設定（アプリ名・アイコン・各プラットフォーム設定）
├── tsconfig.json        # expo/tsconfig.base を継承 + strict
├── assets/              # 画像・アイコン等
├── AGENTS.md            # Expo バージョン注意書き
└── package.json
```

今後の拡張方針（コードが増えてきたら導入。**設計は本人が決める**）:

```
src/
├── components/      # 再利用可能な UI コンポーネント
├── screens/         # 画面単位のコンポーネント
├── navigation/      # 画面遷移（Expo Router or React Navigation）
├── store/           # 状態管理
└── types/           # 共通型定義
```

> 実際の構成が固まったらこのセクションを更新すること。
