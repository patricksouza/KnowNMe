import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#1a1a1a",
  },
  containerButton: {
    flex: 1,
    paddingBottom: 10,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
  },
  subContainer: {
    margin: 20,
    marginTop: 5,
    backgroundColor: "#1E1E1E",
    paddingBottom: 25,
    borderRadius: 5,
    elevation: 5,
  },
  cellContainer: {
    flex: 1,
    margin: 0,
    color: "#fff",
    fontSize: 18,
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
    textAlign: "center",
    fontWeight: "600",
    color: "#fff",
  },
  subTitle: {
    padding: 10,
    marginLeft: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#fff",
  },
  searchBar: {
    margin: 30,
    marginTop: 10,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    elevation: 5,
  },
  button: {
    color: "black",
    backgroundColor: "#F4717F",
  },
});
