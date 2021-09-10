import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview'
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

const ArticleScreen = (props) => {
  const { route, addClip, deleteClip } = props
  const { article } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default ArticleScreen
