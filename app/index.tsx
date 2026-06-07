import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// このファイルが「/」（最初の画面）になる。
// app/about.tsx を作れば「/about」、app/foo/bar.tsx なら「/foo/bar」。
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>app/index.tsx を編集してアプリ作りを始めよう！</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
