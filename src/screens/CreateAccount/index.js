import { ButtonMarginBlue, ButtonTitle } from "../../components/Button/style";
import { Container } from "../../components/Container/style";
import { Input } from "../../components/Input/style";
import { LinkBlueMontserratMargin } from "../../components/Links/style";
import { LogoVital } from "../../components/Logo/style";
import { TextGrayCreateAccount } from "../../components/Text/style";
import { Title } from "../../components/Title/style";

export function CreateAccount() {
    return (
        <Container>
            <LogoVital/>

            <Title>Criar conta</Title>

            <TextGrayCreateAccount>Insira seu endereço de e-mail e senha para realizar seu cadastro.</TextGrayCreateAccount>

            <Input placeholder="Usuário ou E-mail"/>
            <Input placeholder="Senha"/>
            <Input placeholder="Confirmar senha"/>

            <ButtonMarginBlue>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </ButtonMarginBlue>

            <LinkBlueMontserratMargin>Cancelar</LinkBlueMontserratMargin>
        </Container>
    );
}