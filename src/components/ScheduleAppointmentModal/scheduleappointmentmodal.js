import { Modal } from "react-native";
import { Title, TitleMedicalRecord } from "../Title/style";
import { Container, PatientContainer, ScheduleContainer } from "../Container/style";
import { ModalContentMedicalRecord, ModalContentSchedule } from "../Content/style";
import { ImageModalMedic } from "../MedicalRecordModal/style";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';

export const ScheduleAppointmentModal = ({ visible, setshowModalSchedule, ...rest }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const schedule = [
        { label: "teste1", value: "1" },
    ];

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ScheduleContainer>
                <ModalContentSchedule>
                    <Title>Agendar Consulta</Title>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        style={styles.picker} 
                    >
                        {schedule.map((schedule, index) => (
                            <Picker.Item key={index} label={schedule.label} value={schedule.value} />
                        ))}
                    </Picker>
                </ModalContentSchedule>
            </ScheduleContainer>
        </Modal>
    );
}

const styles = StyleSheet.create({
    picker: {
        width: '100%',
        height: 50, // Altura do Picker
        backgroundColor: '#fff', // Cor de fundo do Picker
        borderRadius: 5, // Raio da borda do Picker
        borderWidth: 1, // Largura da borda do Picker
        borderColor: '#000', // Cor da borda do Picker
        marginBottom: 20, // Espaço abaixo do Picker
    },
});
