import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Avatar from "../assets/avt1.jpg";
import ImageFeed from "../assets/avt4.jpg";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Feed(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Image style={styles.avatar} source={props.avatar} />
          <Text styles={styles.username}>{props.name}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
      <Image style={styles.imageFeed} source={props.link} />
      <View style={styles.action}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            style={styles.actionIcon}
            name={props.liked ? "heart" : "hearto"}
            size={24}
            color={props.liked ? "red" : "black"}
          />
          <FontAwesome
            style={styles.actionIcon}
            name="comment-o"
            size={24}
            color="black"
          />
          <Ionicons
            style={styles.actionIcon}
            name="ios-paper-plane-outline"
            size={24}
            color="black"
          />
        </View>
        <FontAwesome
          style={{ paddingRight: 5 }}
          name="bookmark-o"
          size={24}
          color="black"
        />
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <Text>{props.likeCount} lượt thích</Text>
        <Text style={{ color: "#919191", fontSize: 12 }}>
          {props.time} giờ trước
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  imageFeed: {
    width: "100%",
    height: null,
    aspectRatio: 960 / 960,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {},
  action: {
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal:10,
    justifyContent: "space-between",
  },
  actionIcon: {
      paddingHorizontal: 5
  }
});
