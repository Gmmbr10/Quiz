import { StyleSheet,Dimensions } from "react-native";
const {width} = Dimensions.get("screen");

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222"
  },

  form: {
    paddingVertical: 70,
    paddingHorizontal: 50,
    backgroundColor: "#333",
    borderRadius: 10
  },

  label: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  
  input: {
    fontSize: 12,
    borderBottomColor: "#F8E1A5",
    color: "#fff",
    borderBottomWidth: 2,
    marginVertical: 10
  },
  
  btn: {
    fontSize: 24,
    width: width/2,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "#F8E1A5",
    justifyContent: "center",
    alignItems: "center"
  },

  btntxt: {
    color: "#222",
    fontWeight: "bold"
  }
});

export default style;