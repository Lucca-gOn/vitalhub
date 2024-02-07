import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { Input } from "../../components/Input/style";
import { LinkAccount, LinkMedium } from "../../components/Links/style";
import { ButtonTitle, Button, ButtonGoogle, ButtonTitleGoogle } from "../../components/Button/style";
import { ContentAccount } from "../../components/Content/style";
import { TextAccount } from "../../components/Text/style";
import { IconGoogle } from "../../components/Icon/style";

export function Login() {
    return (
        <Container>
            <Logo source={require("../../assets/logo.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" />

            <Input placeholder="Senha" secureTextEntry />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <IconGoogle source={require('../../assets/google.png')} />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkAccount>Crie uma conta agora!</LinkAccount>
            </ContentAccount>
        </Container>
    );
}