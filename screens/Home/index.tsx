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
      <View style={styles.Header}>
        <View style={styles.HeaderTitle}>
          <Text style={styles.HeaderText}>
            Welcome To <Text style={{ fontWeight: "bold" }}>BigHit</Text>
          </Text>
          <Text style={styles.HeaderText}>India's biggest sports platform</Text>
        </View>
        <View style={styles.HeaderButton}>
          <Text style={styles.HeaderText}>Create Profile</Text>
        </View>
      </View>
    </View>
  );
};
