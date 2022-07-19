import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "column",
    alignItems: "stretch",
  },
  modalContainer: {
    backgroundColor: "#262626",
    margin: 25,
    padding: 50,
    borderRadius: 5,
  },
  modalButton: {
    margin: 10,
    backgroundColor: "red"
  },
  modalBodyContent: {
    color: "#fff"
  }
});
