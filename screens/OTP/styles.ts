import { StyleSheet } from "react-native";
import { isHeightSmall, isWidthSmall } from "../../constants";

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
    height: isHeightSmall ? 75 : 85,
  },
  Header: {
    height: 45,
    justifyContent: "space-between",
    alignItems: "center",
  },
  PhoneNumber: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
