import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Instancia do stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    /*Navegação*/

    //Container
    //StackNavigator
    //StackScreen

    // envolve a estrutura da navegação
    <NavigationContainer>

      {/*Componente para navegação*/}
      <Stack.Navigator>
        
        <Stack.Screen name="Navegacao" component={Navegacao} options={{title: "Navegacao"}}/>
      
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}
