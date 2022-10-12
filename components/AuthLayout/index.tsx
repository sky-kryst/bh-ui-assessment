import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import styles from "./styles";

export const AuthLayout = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.Container}
      // keyboardVerticalOffset={-10}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.Container}>
          <View style={styles.BannerContainer}>
            <Image
              source={require("../../assets/images/login.png")}
              style={styles.BannerImage}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>
              Welcome to <Text style={{ fontWeight: "bold" }}>BigHit</Text>
            </Text>
          </View>
        </View>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
