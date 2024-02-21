import { useState } from "react";
import { ButtoTitleStatus, ButtonStatus } from "../Button/style";
import { CalendarList } from "../Calendar/calendar";
import { Container, ContainerHeader } from "../Container/style";
import { ContentStatus } from "../Content/style";
import { StatusQuery } from "../StatusQuery/statusquery";
import { BoxUser, DataUser, ImageUser, ListCenter, ListGap, NameUser, TextDefault } from "./style";
import { MaterialIcons } from '@expo/vector-icons';
import { ListComponent } from "../List/List";
import { CardQuery } from "../CardQuery/cardquery";
import { CancellationModal } from "../CancellationModal/cancellationmodal";

const Query = [
    { id: 1, nome: "Lucas", situacao: "agendadas" },
    { id: 2, nome: "Lucas2", situacao: "realizado" },
    { id: 3, nome: "Lucas3", situacao: "cancelado" },
    { id: 4, nome: "Lucas4", situacao: "realizado" },
    { id: 5, nome: "Lucas5", situacao: "realizado" },
    { id: 6, nome: "Lucas6", situacao: "agendadas" },
    { id: 7, nome: "Lucas7", situacao: "agendadas" },
    { id: 8, nome: "Lucas8", situacao: "agendadas" },

]

export function Header() {
    const [statusList, setStatusList] = useState("agendadas")

    //State para os modals
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalMedicalRecord, setshowModalMedicalRecord] = useState(false);

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
                <StatusQuery textButton={"Agendadas"} clickButton={statusList === "agendadas"} onPress={() => setStatusList("agendadas")} />
                <StatusQuery textButton={"Realizadas"} clickButton={statusList === "realizado"} onPress={() => setStatusList("realizado")} />
                <StatusQuery textButton={"Canceladas"} clickButton={statusList === "cancelado"} onPress={() => setStatusList("cancelado")} />
            </ContentStatus>


            <ListComponent
                data={Query}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.situacao && (
                        <CardQuery
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressMedicalRecord={() => setshowModalMedicalRecord(true)}
                        />
                    )
                }

                contentContainerStyle={{ alignItems: 'center' }}
            />

            <CancellationModal visible={showModalCancel} setShowModalCancel={setShowModalCancel}/>
        </Container>
    );
}