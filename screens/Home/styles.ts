import { StatusBar, StyleSheet } from "react-native";
import { screenHeight, screenWidth, windowHeight } from "../../constants";

export default StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white" },
  Circle: {
    height: screenHeight,
    width: screenHeight,
    borderRadius: screenHeight / 2,
    backgroundColor: "blue",
    position: "absolute",
    bottom: screenHeight / 1.8 + StatusBar.currentHeight,
    zIndex: -1,
    color: "blue",
    left: -(screenHeight - screenWidth) / 2,
  },
  Header: {
    height: "8%",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    alignItems: "center",
  },
  HeaderText: {
    color: "white",
  },
  HeaderTitle: {
    justifyContent: "space-evenly",
    height: "70%",
  },
  HeaderButton: {
    height: "60%",
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignContent: "center",
    minWidth: "30%",
    borderRadius: windowHeight * 0.3,
  },
  Banner: {
    borderWidth: 1,
    height: "40%",
  },
  Categories: {
    borderWidth: 1,
    height: "20%",
  },
  Leaderboard: {
    borderWidth: 1,
    height: "18%",
  },
});
