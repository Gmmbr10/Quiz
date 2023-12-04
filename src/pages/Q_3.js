import { View , Text , TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import style from "../styles/Question.style"

export default function Q_3(props){
  const navigation = useNavigation();

  let {acertos,erros} = props.route.params;
  
  return (
    <View style={style.container}>
      <Text style={style.question}>Quais times europeus o Corinthians ganhou no mundial de 2000 e no mundial de 2012</Text>
      <Text style={style.easterEgg}>CHUPA PALMEIRAS</Text>
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          acertos++;
          navigation.navigate("Q_4",{acertos,erros})
        }}
      >
        <Text>Real Madrid e Chelsea</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_4",{acertos,erros})
        }}
      >
        <Text>Real Madrid e PSG</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_4",{acertos,erros})
        }}
      >
        <Text>Chelsea e Liverpool</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_4",{acertos,erros})
        }}
      >
        <Text>Barcelona e Manchester City</Text>
      </TouchableOpacity>
      
    </View>
  )
}