import { Modal } from "react-native";
import { ImageModalMedic } from "./style";
import { PatientContainer } from "../Container/style";
import { ContentTextModalPatient, ModalContent, ModalContentMedicalRecord } from "../Content/style";
import { Title } from "../Title/style";
import { TextGrayModalPatient } from "../Text/style";
import { ButtonMarginBlue, ButtonTitle } from "../Button/style";
import { LinkBlueMontserratMargin } from "../Links/style";

export const MedicalRecordModal = ({ visible, setshowModalMedicalRecord, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientContainer>
                <ModalContentMedicalRecord>
                    <ImageModalMedic
                        source={{ uri: "https://github.com/MagiLogus.png" }}
                    />

                    <Title>Paulo Oliveira</Title>

                    <ContentTextModalPatient>
                        <TextGrayModalPatient>22 Anos</TextGrayModalPatient>
                        <TextGrayModalPatient>lucas.oliveira@gmail.com</TextGrayModalPatient>
                    </ContentTextModalPatient>

                    <ButtonMarginBlue onPress={() => setshowModalMedicalRecord(false)}>
                        <ButtonTitle>Inserir prontuário</ButtonTitle>
                    </ButtonMarginBlue>

                    <LinkBlueMontserratMargin  onPress={() => setshowModalMedicalRecord(false)}>Cancelar</LinkBlueMontserratMargin>
                </ModalContentMedicalRecord>
            </PatientContainer>

        </Modal>
    );
};