import LottieView from "lottie-react-native";
import React from "react";
import { Modal, View } from "react-native";
import styles from "./styles";

interface IProps {
  isLoading: boolean;
}

export const FullScreenLoader = ({ isLoading }: IProps) => {
  return (
    <Modal
      animationType="none"
      visible={isLoading}
      presentationStyle="pageSheet"
      style={{ flex: 1 }}
      transparent
    >
      <View style={styles.Container}>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#eee",
          }}
          source={require("../../assets/loader-animation.json")}
        />
      </View>
    </Modal>
  );
};
