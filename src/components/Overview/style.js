import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#1E1E1E",
  },
  containerButton: {
    flex: 1,
    paddingBottom: 20,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#1E1E1E",
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
  cellContainer: {
    flex: 1,
    width: 10,
    margin: 2,
    color: "#fff"
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
    color: "#fff"
  },
  subTitle: {
    padding: 10,
    marginLeft: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#fff"
  },
  searchBar: {
    margin: 30,
    marginTop: 10,
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    borderTopColor: "#F4717F",
    color: "#F4717F",
  }
});
