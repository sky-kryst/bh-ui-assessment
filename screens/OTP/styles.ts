import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../constants";

const isWidthSmall = screenWidth < 400;
const isHeightSmall = screenHeight < 650;

export default StyleSheet.create({
  Form: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  InputContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    height: isHeightSmall ? 70 : 75,
    // borderWidth: 1,
    // marginTop: 20,
  },
  Inputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: isWidthSmall ? 275 : 286,
  },
  Input: {
    width: isWidthSmall ? 38 : 40,
    height: isWidthSmall ? 48 : 50,
    borderRadius: 7,
    borderWidth: 1,
  },
  Buttons: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    height: isHeightSmall ? 75 : 85,
  },
  Header: {
    height: 45,
    // borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  PhoneNumber: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
