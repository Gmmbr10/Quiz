import { View , Text , TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import style from "../styles/Question.style"

export default function Q_1(){
  const navigation = useNavigation();

  let acertos = 0;
  let erros = 0;
  
  return (
    <View style={style.container}>

      <Text style={style.question}>Quando o Corinthians ganhou seu primeiro título da Copa do Brasil?</Text>
      
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_2",{acertos,erros})
        }}
      >
        <Text>1990</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          acertos++;
          navigation.navigate("Q_2",{acertos,erros})
        }}
      >
        <Text>1995</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_2",{acertos,erros})
        }}
      >
        <Text>2002</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_2",{acertos,erros})
        }}
      >
        <Text>2009</Text>
      </TouchableOpacity>

    </View>
  )
}