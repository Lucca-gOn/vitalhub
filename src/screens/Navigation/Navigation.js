import { Button, View } from "react-native";

export const Navigation = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Button title="Login" onPress={() => navigation.navigate("Login")}/>
            <Button title="ForgotPassword" onPress={() => navigation.navigate("ForgotPassword")}/>
            <Button title="CheckEmail" onPress={() => navigation.navigate("CheckEmail")}/>
            <Button title="ResetPassword" onPress={() => navigation.navigate("ResetPassword")}/>
            <Button title="CreateAccount" onPress={() => navigation.navigate("CreateAccount")}/>
            <Button title="MedicQuery" onPress={() => navigation.navigate("MedicQuery")}/>
        </View>
    );
}