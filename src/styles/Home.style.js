import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get("screen");

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#222",
  },

  header: {
    width,
    height: height * 0.1,
    backgroundColor: "#222",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 24
  },

  main: {
    width,
    height: height - ( height * 0.2 ),
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },

  textHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },

  section: {
    width: width * 0.75,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: height / 20,
  },

  text: {
    color: "#fff",
    textSize: 18,
    textAlign: "center",
  },

  btn: {
    width: width * 0.75,
    paddingVertical: 10,
    backgroundColor: "#F8E1A5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  }

});

export default style;