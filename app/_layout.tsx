import { Stack } from 'expo-router';

// app/ 配下の全画面を束ねるルートレイアウト。
// ここで Stack ナビゲーター（画面を積み重ねる遷移）を定義している。
export default function RootLayout() {
  return <Stack />;
}
