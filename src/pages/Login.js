import { useState , createContext } from "react";
import { View , Text , TextInput , TouchableOpacity } from "react-native";
import style from "../styles/Login.style";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  let acertos = 0;
  let erros = 0;

  const [nome,setNome] = useState("");
  const [senha,setSenha] = useState("");

  return (
    <View style={style.container}>

      <View style={style.form}>

        <Text style={style.label}>Nome do usuário:</Text>
        <TextInput style={style.input} value={nome} onChangeText={setNome} />

        <Text style={style.label}>Senha:</Text>
        <TextInput style={style.input} value={senha} onChangeText={setSenha} />

        <TouchableOpacity style={style.btn} onPress={()=>{
            if ( nome == "giovanne" && senha == "giovanne123" ) {
              navigation.navigate("Home");
            } else {
              alert("Credenciais incorretas!");
            }
        }}>

          <Text style={style.btntxt}>Logar</Text>

        </TouchableOpacity>
        
      </View>
    
    </View>
  )
}