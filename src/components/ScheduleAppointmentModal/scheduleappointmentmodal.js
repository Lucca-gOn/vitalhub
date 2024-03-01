import { Modal } from "react-native";
import { Title, TitleMedicalRecord, TitlePicker, TitleWithInput } from "../Title/style";
import { Container, PatientContainer, ScheduleContainer } from "../Container/style";
import { ContentLevelQuery, ContentPicker, ContentStatus, InputWithTitleContent, InputWithTitleContentPicker, ModalContentMedicalRecord, ModalContentSchedule } from "../Content/style";
import { ImageModalMedic } from "../MedicalRecordModal/style";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { InputPicker } from "../Input/style";
import { SelectPicker, TitleInputPicker } from "./style";
import { IconSelect } from "../Icon/style";
import { ButtonLevelQuery } from "../ButtonLevelQuery/buttonlevelquery";
import { InputWithTitleMedium } from "../InputWithTitleMedium/inputwithtitlemedium";



export const ScheduleAppointmentModal = ({ visible, setshowModalSchedule, ...rest }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const schedule = [
        { label: "Consulta 1", value: "1" },
        { label: "Consulta 2", value: "2" },
        { label: "Consulta 3", value: "3" },
        { label: "Consulta 4", value: "4" },
    ];

    const [statusList, setStatusList] = useState("rotina")

    return (

        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ScheduleContainer>
                <ModalContentSchedule>
                    <TitlePicker>Agendar Consulta</TitlePicker>

                    <InputWithTitleContent style={{ width: '100%' }}>
                        <TitleWithInput>Informe o tipo de consulta</TitleWithInput>
                    </InputWithTitleContent>
                    <SelectPicker>
                        <RNPickerSelect
                            onValueChange={(value) => setSelectedValue(value)}
                            items={schedule}
                            placeholder={{ label: "Tipo de consulta", value: null }}
                            value={selectedValue}
                            style={{
                                inputIOS: {
                                    color: '#34898F',
                                    fontFamily: "MontserratAlternates_600SemiBold",
                                    fontSize: 14,
                                    //Arrumar picker
                                    // borderWidth: 1, // Define a largura da borda
                                    // borderColor: '#34898F', // Define a cor da borda
                                    // borderStyle: 'solid', // Define o estilo da borda
                                },
                            }}
                        />
                        <IconSelect />
                    </SelectPicker>
                    <InputWithTitleContent style={{ width: '100%' }}>
                        <TitleWithInput>Informe o tipo de consulta</TitleWithInput>
                    </InputWithTitleContent>
                    
                    <ContentLevelQuery>
                        <ButtonLevelQuery textButton={"Rotina"} clickButton={statusList === "rotina"} onPress={() => setStatusList("rotina")} />
                        <ButtonLevelQuery textButton={"Exame"} clickButton={statusList === "exame"} onPress={() => setStatusList("exame")} />
                        <ButtonLevelQuery textButton={"Urgência"} clickButton={statusList === "urgencia"} onPress={() => setStatusList("urgencia")} />
                    </ContentLevelQuery>
                </ModalContentSchedule>
            </ScheduleContainer>
        </Modal>
    );
}
