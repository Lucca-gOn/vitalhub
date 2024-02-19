import { useState } from "react";
import { ButtoTitleStatus, ButtonStatus } from "../Button/style";
import { CalendarList } from "../Calendar/calendar";
import { Container, ContainerHeader } from "../Container/style";
import { ContentStatus } from "../Content/style";
import { StatusQuery } from "../StatusQuery/statusquery";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style";
import { MaterialIcons } from '@expo/vector-icons';

const Consultas = [
    {id: 1, nome: "Lucas", situacao: "pendente"},
    {id: 2, nome: "Lucas2", situacao: "realizado"},
    {id: 3, nome: "Lucas3", situacao: "cancelado"},
    {id: 4, nome: "Lucas4", situacao: "realizado"},
]

export function Header() {
    const [statusLista, setStatusLista] = useState("pendente")

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
                <StatusQuery textButton={"Agendadas"} clickButton={statusLista === "pendente"} onPress={() => setStatusLista("pendente")}/>
                <StatusQuery textButton={"Realizadas"} clickButton={statusLista === "realizado"} onPress={() => setStatusLista("realizado")}/>
                <StatusQuery textButton={"Canceladas"} clickButton={statusLista === "cancelado"} onPress={() => setStatusLista("cancelado")}/>
            </ContentStatus>

            <ContentFlatList>
                
            </ContentFlatList>
        </Container>
    );
}