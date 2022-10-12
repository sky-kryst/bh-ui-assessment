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

interface IProps {
  children: React.ReactNode;
  headerText: React.ReactNode;
}

export const AuthLayout = ({ children, headerText }: IProps) => {
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
            <Text style={styles.HeaderText}>{headerText}</Text>
          </View>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
