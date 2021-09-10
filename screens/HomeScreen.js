import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import axios from 'axios'
import Constants from 'expo-constants'
import ListItem from '../components/ListItem'

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL)
      setArticles(response.data.articles)
      console.info('response', response)
    } catch (error) {
      console.info(error)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article')}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

export default HomeScreen