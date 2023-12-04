import { SafeAreaView , StyleSheet} from "react-native";
import Splash from "./src/pages/Splash";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Q_1 from "./src/pages/Q_1";
import Q_2 from "./src/pages/Q_2";
import Q_3 from "./src/pages/Q_3";
import Q_4 from "./src/pages/Q_4";
import Q_5 from "./src/pages/Q_5";
import Resultados from "./src/pages/Resultados";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator , Screen } = createStackNavigator();

export default function App(){
  return (
    <SafeAreaView style={style.container}>
      <NavigationContainer>
        <Navigator initialRouteName="Splash" screenOptions={{
          headerShown: false
        }}>
          <Screen name="Home" component={Home} />
          <Screen name="Splash" component={Splash} />
          <Screen name="Login" component={Login} />
          <Screen name="Q_1" component={Q_1} />
          <Screen name="Q_2" component={Q_2} />
          <Screen name="Q_3" component={Q_3} />
          <Screen name="Q_4" component={Q_4} />
          <Screen name="Q_5" component={Q_5} />
          <Screen name="Resultados" component={Resultados} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
});