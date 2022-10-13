import React, { useEffect } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
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
  const firstImageOpacity = useSharedValue(1);
  const secondImageOpacity = useSharedValue(0);
  const firstImageYOffset = useSharedValue(0);
  const secondImageYOffset = useSharedValue(0);

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener("keyboardWillShow", () => {
      firstImageOpacity.value = withTiming(0, {
        duration: 2500,
        easing: Easing.out(Easing.linear),
      });
      firstImageYOffset.value = withTiming(-20, {
        duration: 2500,
        easing: Easing.out(Easing.exp),
      });
      secondImageOpacity.value = withTiming(1, {
        duration: 1200,
        easing: Easing.out(Easing.exp),
      });
    });
    const keyboardWillHide = Keyboard.addListener("keyboardWillHide", () => {
      firstImageOpacity.value = withTiming(1, {
        duration: 1500,
        easing: Easing.out(Easing.exp),
      });
      firstImageYOffset.value = withTiming(0, {
        duration: 1500,
        easing: Easing.out(Easing.exp),
      });

      secondImageOpacity.value = withTiming(0, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
      secondImageYOffset.value = withTiming(
        -20,
        {
          duration: 500,
          easing: Easing.out(Easing.linear),
        },
        () => {
          secondImageYOffset.value = 0;
        }
      );
    });

    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, []);

  const firstImageStyles = useAnimatedStyle(() => {
    return {
      opacity: firstImageOpacity.value,
      transform: [{ translateY: firstImageYOffset.value }],
    };
  });

  const secondImageStyles = useAnimatedStyle(() => {
    return {
      opacity: secondImageOpacity.value,
      transform: [{ translateY: secondImageYOffset.value }],
    };
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.Container}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.Container}>
          <Animated.View style={[styles.BannerContainer, firstImageStyles]}>
            <Image
              source={require("../../assets/images/login.png")}
              style={styles.BannerImage}
              resizeMode="stretch"
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.BannerContainer,
              {
                position: "absolute",
                width: "100%",
              },
              secondImageStyles,
            ]}
          >
            <Image
              source={require("../../assets/images/login2.png")}
              style={styles.BannerImage}
              resizeMode="stretch"
            />
          </Animated.View>
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
