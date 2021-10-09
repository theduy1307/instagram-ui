import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Story from './components/Story';
import Footer from "./components/Footer";
import Feed from './components/Feed';
import {stories, article} from './components/mockdata'
const storiesComponent = stories.map((item, index) => (
  <Feed key={item.id} name={item.name} avatar={item.avatar} image={item.image} />
));
export default function App() {
  function renderItem({item}){
    return (
      <Feed
        name={item.name}
        link={item.link}
        likeCount={item.likeCount}
        time={item.time}
        avatar={item.avatar}
        liked={item.liked}
      />
    );
  }
  function renderStory() {
    return <Story />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <ScrollView>{storiesComponent}</ScrollView> */}
      <FlatList
        data={article}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderStory}
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
