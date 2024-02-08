import { View, Text } from "react-native";
import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { TextBlueEmail, TextGray, TextGrayBlue } from "../../components/Text/style";
import { ContentCheckEmail } from "../../components/Content/style";
import { InputNumber } from "../../components/Input/style";
import { ButtonMarginBlue, ButtonTitle } from "../../components/Button/style";
import { LinkBlueMontserrat, LinkBlueMontserratEmail, LinkBlueMontserratMargin } from "../../components/Links/style";

export function CheckEmail () {
    return (
        <Container>
            
            <Logo source={require("../../assets/logo.png")} />

            <Title>Verifique seu e-mail</Title>
            
            <TextGray>Digite o código de 4 dígitos enviado para </TextGray>
            <TextBlueEmail>username@email.com</TextBlueEmail>

            <ContentCheckEmail>
                <InputNumber placeholder="0" maxLength={1}/>
                <InputNumber placeholder="0" maxLength={1}/>
                <InputNumber placeholder="0" maxLength={1}/>
                <InputNumber placeholder="0" maxLength={1}/>
            </ContentCheckEmail>

            <ButtonMarginBlue>
                <ButtonTitle>Entrar</ButtonTitle>
            </ButtonMarginBlue>

            <LinkBlueMontserratMargin>Reenviar Código</LinkBlueMontserratMargin>
        </Container>
    );
}