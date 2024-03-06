import { Container } from "../../components/Container/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { LinkBlueMontserrat, LinkMedium } from "../../components/Links/Style";
import { ButtonTitle, Button, ButtonGoogle, ButtonTitleGoogle } from "../../components/Button/Style";
import { ContentAccount } from "../../components/Content/Style";
import { TextAccount } from "../../components/Text/Style";
import { IconGoogle } from "../../components/Icon/Style";
import { LogoVital } from "../../components/Logo/Style";

export function Login({ navigation }) {
    
    async function Login() {
        navigation.navigate("Main")
    }

    return (
        <Container>
            <LogoVital />

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" />

            <Input placeholder="Senha" secureTextEntry />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <IconGoogle />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkBlueMontserrat>Crie uma conta agora!</LinkBlueMontserrat>
            </ContentAccount>
        </Container>
    );
}