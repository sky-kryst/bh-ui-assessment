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
  Inputs: {
    height: height * 0.1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  InputContainer: {
    flexDirection: "row",
    height: "55%",
  },
  CountryCode: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 22 + (width > 400 ? 2 : 0),
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    width: 65,
    justifyContent: "space-between",
  },
  CountryCodeText: {
    fontSize: 14 + (height > 820 ? 2 : 0),
    color: "darkgrey",
    fontWeight: "500",
  },
  PhoneNumber: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    fontSize: 17 + (height > 820 ? 2 : 0),
    fontWeight: "400",
    minWidth: 162,
  },
  Show: {
    borderWidth: 1,
  },
  Form: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  BlueLink: {
    color: "#5F9DFF",
    fontWeight: "500",
  },
  Button: {
    backgroundColor: "black",
    height: height > 650 ? 45 : 40,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22.5,
  },
  ButtonText: {
    color: "white",
    fontSize: 15,
  },
  TnC: {
    fontSize: 12,
    color: "grey",
  },
});
