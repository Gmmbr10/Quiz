import { View , Text , TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import style from "../styles/Question.style"

export default function Q_5(props){
  const navigation = useNavigation();

  let {acertos,erros} = props.route.params;
  
  return (
    <View style={style.container}>
      <Text style={style.question}>Qual é o jogador com maior número de jogos pelo Corinthians?</Text>
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Resultados",{acertos,erros})
        }}
      >
        <Text>Cássio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          acertos++;
          navigation.navigate("Resultados",{acertos,erros})
        }}
      >
        <Text>Wladimir</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Resultados",{acertos,erros})
        }}
      >
        <Text>Romero</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Resultados",{acertos,erros})
        }}
      >
        <Text>Basílio</Text>
      </TouchableOpacity>
    </View>
  )
}