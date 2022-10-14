import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, Text, View } from "react-native";
import styles from "./styles";

export const Home = () => {
  return (
    <View style={styles.Container}>
      <StatusBar
        translucent={false}
        backgroundColor="blue"
        style={Platform.OS === "android" ? "light" : "dark"}
      />
      <View style={styles.Circle}></View>
      <Text>Hello this is Home screen</Text>
    </View>
  );
};
