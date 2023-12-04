import { StyleSheet , Dimensions } from "react-native";

const { width , height } = Dimensions.get("screen");

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343434"
  },

  header: {
    width,
    height: height*0.1,
    paddingVertical: 24,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: '#222',
  },

  main: {
    width,
    height: height - (height*0.2),
    justifyContent: "center",
    alignItems: "center",
  },

  textHeader: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  text: {
    color: "#fff",
    fontSize: 15,
  },

  btn: {
    backgroundColor: "#222",
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderRadius: 50,
    marginTop: 24,
  }
  
});

export default style;