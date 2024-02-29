import { useState } from "react";
import { Container } from "../../components/Container/style";
import { ContentIconPatientQuery, ContentSquareIcon, ContentStatus } from "../../components/Content/style";
import { Header } from "../../components/Header/header";
import { ListComponent } from "../../components/List/List";
import { StatusQuery } from "../../components/StatusQuery/statusquery";
import { CardQuery } from "../../components/CardQuery/cardquery";
import { MaterialIcons } from "@expo/vector-icons";
import { IconStethoscope } from "../../components/Icon/style";
import { CancellationModal } from "../../components/CancellationModal/cancellationmodal";
import { MedicalRecordModal } from "../../components/MedicalRecordModal/medicalrecordmodal";
import { ScheduleAppointmentModal } from "../../components/ScheduleAppointmentModal/scheduleappointmentmodal";
import { ButtonSchedule } from "../../components/ButtonSchedule/buttonschedule";

const PatientQueryArray = [
    { id: 1, nome: "Fulano", situacao: "agendadas" },
    { id: 2, nome: "Ciclano", situacao: "realizado" },
    { id: 3, nome: "Beltrano", situacao: "cancelado" }
]

export function PatientQuery() {
    const [statusList, setStatusList] = useState("agendadas")

    const [showModalSchedule, setshowModalSchedule] = useState(false);
    const [showModalCancel, setShowModalCancel] = useState(false);
    return (

        <>
            <Header source="https://github.com/MagiLogus.png" name="Paciente Paulo" />
            <Container>
                <ContentStatus>
                    <StatusQuery textButton={"Agendadas"} clickButton={statusList === "agendadas"} onPress={() => setStatusList("agendadas")} />
                    <StatusQuery textButton={"Realizadas"} clickButton={statusList === "realizado"} onPress={() => setStatusList("realizado")} />
                    <StatusQuery textButton={"Canceladas"} clickButton={statusList === "cancelado"} onPress={() => setStatusList("cancelado")} />
                </ContentStatus>

                <ListComponent
                    data={PatientQueryArray}
                    keyExtractor={(item) => item.id}

                    renderItem={({ item }) =>
                        statusList == item.situacao && (
                            <CardQuery
                                situacao={item.situacao}
                                onPressCancel={() => setShowModalCancel(true)}
                            />
                        )
                    }
                    contentContainerStyle={{ alignItems: 'center' }}
                />

                <CancellationModal visible={showModalCancel} setShowModalCancel={setShowModalCancel} />
                <ScheduleAppointmentModal visible={showModalSchedule} setshowModalSchedule={setshowModalSchedule} />

                <ButtonSchedule onPressSchedule={() => setshowModalSchedule(true)} />
            </Container>
        </>
    );
};