import { Container } from "../../components/Container/style";
import { Title } from "../../components/Title/style";
import { Input } from "../../components/Input/style";
import { LinkBlueMontserrat, LinkMedium } from "../../components/Links/style";
import { ButtonTitle, Button, ButtonGoogle, ButtonTitleGoogle } from "../../components/Button/style";
import { ContentAccount } from "../../components/Content/style";
import { TextAccount } from "../../components/Text/style";
import { IconGoogle } from "../../components/Icon/style";
import { LogoVital } from "../../components/Logo/style";

export function Login() {
    return (
        <Container>
            <LogoVital/>

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" />

            <Input placeholder="Senha" secureTextEntry />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <IconGoogle/>
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkBlueMontserrat>Crie uma conta agora!</LinkBlueMontserrat>
            </ContentAccount>
        </Container>
    );
}