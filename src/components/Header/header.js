import { ButtoTitleStatus, ButtonStatus } from "../Button/style";
import { CalendarList } from "../Calendar/calendar";
import { Container, ContainerHeader } from "../Container/style";
import { ContentStatus } from "../Content/style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style";
import { MaterialIcons } from '@expo/vector-icons';

export function Header() {
    return (
        <Container>
            <ContainerHeader>
                <BoxUser>
                    <ImageUser
                        source={{ uri: "https://github.com/Lucca-gOn.png" }}
                    />
                    <DataUser>
                        <TextDefault>Bem vindo</TextDefault>
                        <NameUser>Dr. Lucas</NameUser>
                    </DataUser>
                </BoxUser>

                <MaterialIcons name="notifications" size={25} color="white" />
            
            </ContainerHeader>
            
            <CalendarList />

            <ContentStatus>
                <ButtonStatus>
                    <ButtoTitleStatus>Agendadas</ButtoTitleStatus>
                </ButtonStatus>
                
                <ButtonStatus>
                    <ButtoTitleStatus>Realizadas</ButtoTitleStatus>
                </ButtonStatus>
                
                <ButtonStatus>
                    <ButtoTitleStatus>Canceladas</ButtoTitleStatus>
                </ButtonStatus>
            </ContentStatus>
        </Container>
    );
}