import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#1a1a1a"
  },
  subContainerTitle: {
    borderColor: "rgba(255,255,255,0.0)",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subContainer: {
    margin: 30,
    marginTop: 10,
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    borderTopColor: "#F4717F",
    color: "#F4717F",
  },
  title: {
    padding: 5,
    fontSize: 15,
    marginLeft: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  listAccordion: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    borderBottomColor: "#F4717F",
    color: "#F4717F",
  },
});
