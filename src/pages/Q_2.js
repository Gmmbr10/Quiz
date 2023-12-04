import { View , Text , TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import style from "../styles/Question.style"

export default function Q_2(props){
  const navigation = useNavigation();

  let {acertos,erros} = props.route.params;
  
  return (
    <View style={style.container}>

      <Text style={style.question}>Quantos campeonatos Paulistas o Corinthians ganhou?</Text>
      
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_3",{acertos,erros})
        }}
      >
        <Text>25</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_3",{acertos,erros})
        }}
      >
        <Text>28</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          acertos++;
          navigation.navigate("Q_3",{acertos,erros})
        }}
      >
        <Text>30</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.input}
        onPress={()=>{
          erros++;
          navigation.navigate("Q_3",{acertos,erros})
        }}
      >
        <Text>33</Text>
      </TouchableOpacity>

    </View>
  )
}