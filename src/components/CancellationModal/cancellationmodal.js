import { Modal } from "react-native";
import { Title } from "../Title/style";
import { ButtonMarginBlue, ButtonSecondary, ButtonTitle } from "../Button/style";
import { LinkBlueMontserrat, LinkBlueMontserratMargin } from "../Links/style";
import { TextGrayCancelModal } from "../Text/style";
import { PatientContainer } from "../Container/style";
import { ModalContent } from "../Content/style";

export const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientContainer>
                <ModalContent>
                    <Title>Cancelar Consulta</Title>

                    <TextGrayCancelModal>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</TextGrayCancelModal>

                    <ButtonMarginBlue onPress={() => setShowModalCancel(false)}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonMarginBlue>

                    <LinkBlueMontserratMargin onPress={() => setShowModalCancel(false)}>Cancelar</LinkBlueMontserratMargin>
                </ModalContent>
            </PatientContainer>
        </Modal>
    );
}