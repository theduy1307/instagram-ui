import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "../assets/avt1.jpg";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Foundation name="home" size={30} color="black" />
      <Feather name="search" size={30} color="black" />
      <AntDesign name="instagram" size={30} color="black" />
      <AntDesign name="hearto" size={30} color="black" />
      <Image style={styles.avatarStory} source={Avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0,    
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10
  },
  avatarStory:{
      height: 35,
      width: 35,
      borderRadius: 35
  }
});
