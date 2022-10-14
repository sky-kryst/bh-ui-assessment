import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, ScrollView, Text, View } from "react-native";
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
      <ScrollView style={styles.Banner}>
        {getArrayWithXElements(3).map((currentElement) => {
          return <BannerItem key={currentElement} />;
        })}
      </ScrollView>
      <ScrollView style={styles.Categories}>
        {getArrayWithXElements(6).map((currentElement) => {
          return <CategoryItem key={currentElement} />;
        })}
      </ScrollView>
      <View style={styles.Leaderboard}>
        <View>
          <Text>Top Players on BigHit Leaderboard</Text>
        </View>
        <ScrollView>
          {getArrayWithXElements(20).map((currentElement) => {
            return <PlayerItem key={currentElement} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const CategoryItem = () => {
  return <View></View>;
};

const BannerItem = () => {
  return <View></View>;
};

const PlayerItem = () => {
  return <View></View>;
};

const getArrayWithXElements = (x: number) => {
  let array: number[] = [];

  for (let i = 1; i <= x; i++) {
    array.push(i);
  }

  return array;
};
