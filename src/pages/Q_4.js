import { View , Text , TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import style from "../styles/Question.style"

export default function Q_4(props){
  const navigation = useNavigation();

  let {acertos,erros} = props.route.params;
  
  return (
    <View style={style.container}>

      <Text style={style.question}>Corinthians realizou um movimento nos anos 80, qual foi ele?</Text>
      
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_5",{acertos,erros})
        }}
      >
        <Text>Vitória do primeiro mundial</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_5",{acertos,erros})
        }}
      >
        <Text>Construção da Arena</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          acertos++;
          navigation.navigate("Q_5",{acertos,erros})
        }}
      >
        <Text>Dia 15 vote</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_5",{acertos,erros})
        }}
      >
        <Text>Invasão corinthiana</Text>
      </TouchableOpacity>

    </View>
  )
}