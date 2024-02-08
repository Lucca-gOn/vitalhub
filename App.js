import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login';
import { ForgotPassword } from './src/screens/ForgotPassword';
import { CheckEmail } from './src/screens/CheckEmail';
import { ResetPassword } from './src/screens/ResetPassword';
import { CreateAccount } from './src/screens/CreateAccount';
import { MedicQuery } from './src/screens/MedicQuery';

//Instancia do stack navigator
const Stack = createNativeStackNavigator();

//Import fonts
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates"
import {Quicksand_500Medium, Quicksand_600SemiBold} from "@expo-google-fonts/quicksand"

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  };

  return (
    /*Navegação*/

    //Container
    //StackNavigator
    //StackScreen

    // envolve a estrutura da navegação
    <NavigationContainer>

      {/*Componente para navegação*/}
      <Stack.Navigator>
        {/*    Nome da tela                  componente da tela            titulo*/}
        <Stack.Screen name="Navegacao" component={Navigation} options={{ title: "Navegação" }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: "Esqueci senha" }} />
        <Stack.Screen name="CheckEmail" component={CheckEmail} options={{ title: "Código E-mail" }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: "Redefinir senha" }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: "Criar conta" }} />
        <Stack.Screen name="MedicQuery" component={MedicQuery} options={{ title: "Médico consulta" }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
