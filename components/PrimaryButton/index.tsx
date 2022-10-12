import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./styles";

interface IProps {
  onPress?: (event: GestureResponderEvent) => void;
  buttonText: string;
}

export const PrimaryButton: React.FC<IProps> = ({ onPress, buttonText }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.Button}>
        <Text style={styles.ButtonText}>{buttonText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
