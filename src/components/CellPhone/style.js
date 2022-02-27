import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#1E1E1E",
  },

  divided: {
    borderWidth: .5,
    borderColor: "rgba(255,255,255,0.0)",
    borderBottomColor: "#F4717F",
  },
  subContainer: {},
  title: {
    padding: 5,
    fontSize: 15,
    marginLeft: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  listAccordion: {
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
    borderBottomColor: "#F4717F",
    color: "#F4717F",
  },
});
