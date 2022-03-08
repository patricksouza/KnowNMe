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
  subContainer: {
    backgroundColor: "#1E1E1E",
    paddingBottom: 25,
    borderRadius: 5,
    elevation: 5,
  },
  title: {
    padding: 5,
    fontSize: 16,
    marginLeft: 20,
    textTransform: "uppercase",
    color: "#fff",
  },
});
