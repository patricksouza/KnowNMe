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
    elevation: 5
  },
  subContainerTitle: {
    borderColor: "rgba(255,255,255,0.0)",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  title: {
    padding: 5,
    fontSize: 16,
    marginLeft: 20,
    textTransform: "uppercase",
    color: "#fff"
  },
  listAccordion: {
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
    borderBottomColor: "#F4717F",
    color: "#F4717F",
  },
});
