import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { TextGray } from "../../components/Text/style";
import { Input } from "../../components/Input/style";
import { ButtonForgotPassword, ButtonMarginBlue, ButtonTitle } from "../../components/Button/style";

export function ForgotPassword () {
    return (
        <Container>
            <Logo source={require("../../assets/logo.png")} />

            <Title>Recuperar senha</Title>

            <TextGray>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextGray>
            
            <Input>Usuário ou E-mail</Input>
            
            <ButtonMarginBlue>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonMarginBlue>
        </Container>
    );
}