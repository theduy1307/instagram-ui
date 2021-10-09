import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import {stories} from './mockdata'
import Avatar1 from "../assets/avt1.jpg"
import Avatar2 from "../assets/avt2.jpg"
import Avatar3 from "../assets/avt3.jpg"
import Avatar4 from "../assets/avt4.jpg"
import { FontAwesome } from "@expo/vector-icons";

export default function Story() {
  const icon = () => {
    return (
      <FontAwesome
        style={styles.yourStoryIcon}
        name="plus-circle"
        size={24}
        color="blue"
      />
    );
  }
  const storiesComponent = stories.map((item, index) => (
    <View key={index} style={[styles.avatarStoryGroup, styles.yourStory]}>
      <View style={item.isSeen && styles.border}>
        <Image style={styles.avatarStory} source={item.avatar} />
        {item.isCreateStory ? (
          <FontAwesome
            style={styles.yourStoryIcon}
            name="plus-circle"
            size={24}
            color="blue"
          />
        ) : (
          null
        )}
      </View>
      <Text style={styles.textStory}>
        {item.isCreateStory ? "Tin của bạn" : `${item.name.substring(0, 6)}...`}
      </Text>
    </View>
  ));

  
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {storiesComponent}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: "#FAFAFA",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#bfbfbf",
  },
  avatarStory: {
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#fff",
  },
  textStory: {
    fontSize: 14,
  },
  avatarStoryGroup: {
    alignItems: "center",
    justifyContent: "center",
  },
  yourStory: {
    marginLeft: 10,
  },
  yourStoryIcon: {
    position: "absolute",
    bottom: -1,
    right: 8,
  },
  border: {
    width: 73,
    height: 73,
    borderRadius: 73,
    borderWidth: 1.5,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },
});
