import { Dimensions, Platform, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("screen");

console.log(Platform.OS, "height", height);
console.log(Platform.OS, "width", width);

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  BannerContainer: {
    height: "60%",
    alignItems: "center",
    flexDirection: "column-reverse",
  },
  BannerImage: {
    width: "100%",
    height: "110%",
  },
  HeaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    // position: "relative",
    position: "absolute",
    bottom: "38.5%",
    width: "100%",
  },
  HeaderText: { fontSize: height < 650 ? 18 : 19 },
});
