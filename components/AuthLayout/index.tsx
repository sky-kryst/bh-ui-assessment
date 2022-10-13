import React from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { screenHeight } from "../../constants";
import styles from "./styles";

interface IProps {
  children: React.ReactNode;
  headerText: React.ReactNode;
  keyboardVerticalOffset?: number;
  headerHeight?: number;
}

export const AuthLayout = ({
  children,
  headerText,
  keyboardVerticalOffset,
  headerHeight,
}: IProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.Container}
      keyboardVerticalOffset={keyboardVerticalOffset}
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
          <View
            style={[
              styles.HeaderContainer,
              headerHeight && {
                bottom: screenHeight * 0.35 - headerHeight / 2,
              },
            ]}
          >
            <Text style={styles.HeaderText}>{headerText}</Text>
          </View>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
