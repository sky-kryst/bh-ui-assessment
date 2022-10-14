import { StatusBar, StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../constants";

export default StyleSheet.create({
  Container: { flex: 1 },
  Circle: {
    height: screenHeight,
    width: screenHeight,
    borderRadius: screenHeight / 2,
    backgroundColor: "blue",
    position: "absolute",
    bottom: screenHeight / 1.8 + StatusBar.currentHeight,
    zIndex: 1,
    borderWidth: 1,
    color: "blue",
    left: -(screenHeight - screenWidth) / 2,
  },
});
