import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#1E1E1E",
    color: "#fff"
  },
  containerButton: {
    flex: 1,
    paddingBottom: 20,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#1E1E1E",
  },
  subContainer: {
    backgroundColor: "#262626",
    borderRadius: 8,
    margin: 20,
    padding: 0,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
    borderTopColor: "#F4717F",
  },
  cellContainer: {
    flex: 1,
    width: 10,
    margin: 2,
  },
  snackContainer: {
    borderWidth: 2,
    backgroundColor: "#262626",
    borderColor: "rgba(255,255,255,0.2)",
  },
  title: {
    padding: 5,
    fontSize: 15,
    marginLeft: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  subTitle: {
    padding: 10,
    marginLeft: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  searchBar: {
    backgroundColor: "#262626",
    borderRadius: 8,
    margin: 5,
    padding: 0,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
    borderTopColor: "#F4717F",
  },
  button: {
    color: "black",
    backgroundColor: "#F4717F",
    width: 100,
  },
});
