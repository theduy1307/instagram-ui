import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import Logo from '../assets/logo.png'
import { Feather } from "@expo/vector-icons"; 
import { Ionicons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={Logo} />
      <View style={styles.iconHeader}>
        <TouchableHighlight>
          <Feather
            style={styles.iconPlus}
            name="plus-square"
            size={30}
            color="black"
          />
        </TouchableHighlight>
        <Ionicons
          style={styles.iconPlane}
          name="ios-paper-plane-outline"
          size={30}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
  },
  logoImage: {
    width: "35%",
    height: null,
    aspectRatio: 1887 / 536,
  },
  iconHeader: {
    flexDirection: "row",
  },
  iconPlus: {
    marginRight: 20,
  },
  iconPlane: {
    marginHorizontal: 6,
  },
});
