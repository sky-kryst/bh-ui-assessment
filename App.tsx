import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { AuthStack } from "./navigation";
import { Home } from "./screens";
import { useAuthStore } from "./stores";

export default function App() {
  const isUserAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        {isUserAuthenticated ? <Home /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
