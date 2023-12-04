import { View , TouchableOpacity , Text , ImageBackground } from "react-native";
import style from "../styles/Splash.style";
import { useNavigation } from "@react-navigation/native";

export default function Splash(){
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style.container} onPress={() => navigation.navigate("Login")}>
      <ImageBackground style={style.backgroundimg} source={require("../assets/406570457_929393515216680_4985707822378500365_n.jpg")}>

        <View>
      
          <Text style={style.txt}>Bem-vindo!</Text>
        
        </View>

      </ImageBackground>
    </TouchableOpacity>
  )
}