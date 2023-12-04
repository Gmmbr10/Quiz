import { View , Text , TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "../styles/Resultados";

export default function Resultados(props) {
  const navigation = useNavigation();

  let {acertos,erros} = props.route.params;

  return (
    <View style={style.container}>
    
      <View style={style.header}>
        <Text style={style.textHeader}>Resultados</Text>
      </View>

      <View style={style.main}>
        <Text style={style.text}>Acertos: { acertos }</Text>
        <Text style={style.text}>Erros: { erros }</Text>
        <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate("Login")}>
          <Text style={style.text}>Encerra sessão</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  )
  
}