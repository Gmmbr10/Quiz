import { StyleSheet , Dimensions } from "react-native";
const { width , height } = Dimensions.get("screen");

const style = StyleSheet.create({
  container: {
    backgroundColor: "#222",
  },

  backgroundimg: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },

  txt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  }
});

export default style;