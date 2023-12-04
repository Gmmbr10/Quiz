import { StyleSheet, Dimensions } from 'react-native';

const { width , height } = Dimensions.get("screen");

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#222",
  },

  question: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#F8E1A5",
    borderRadius: 50,
    width: width/2,
    paddingVertical: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  easterEgg: {
    color: "#111",
  },
  
});

export default style;