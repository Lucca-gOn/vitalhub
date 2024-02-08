import { View, Text } from "react-native";
import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { TextGray } from "../../components/Text/style";
import { Input } from "../../components/Input/style";
import { ButtonMarginBlue, ButtonTitle } from "../../components/Button/style";

export function ResetPassword () {
    return (
        <Container>
            <Logo source={require("../../assets/logo.png")} />

            <Title>Redefinir Senha</Title>

            <TextGray>Insira e confirme a sua nova senha</TextGray>

            <Input placeholder="Nova senha"/>
            <Input placeholder="Confirmar nova senha"/>

            <ButtonMarginBlue>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </ButtonMarginBlue>
        </Container>
    );
}