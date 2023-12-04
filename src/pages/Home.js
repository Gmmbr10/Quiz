import { View , Text , TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "../styles/Home.style";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>

      <View style={style.header}>
      
        <Text style={style.textHeader}>Bem vindo ao meu quiz!</Text>
      
      </View>

      <View style={style.main}>
      
        <View style={style.section}>
          <Text style={style.text}>
            Prove ser um torcedor fiel!
          </Text>

          <Text style={style.text}>
            Este app nada mais é do que um quiz sobre o Sport Clube Corinthians Paulista!
          </Text>

          <Text style={style.text}>
            Serão realizadas 5 perguntas e no final saiba quantas você acertou ou quantas errou!
          </Text>

          <Text style={style.textHeader}>
            VAI CORINTHIANS!!!
          </Text>

          <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate("Q_1")}>
            <Text style={style.textBtn}>Iniciar o desafio</Text>
          </TouchableOpacity>
          
        </View>
      
      </View>
    
    </View>
  )
  
}