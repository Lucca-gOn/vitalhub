import { View, Text, Button } from "react-native";
import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { Input } from "../../components/Input/style";
import { LinkMedium } from "../../components/Links/style";

export function Login() {
    return (
        <Container>
            <Logo source={require("../../assets/logo.png")}/>

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" />

            <Input placeholder="Senha" secureTextEntry/>

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            {/* <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount>    */}
        </Container>
    );
}