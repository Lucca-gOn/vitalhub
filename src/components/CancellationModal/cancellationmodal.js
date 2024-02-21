import { Modal } from "react-native";
import { Title } from "../Title/style";
import { ButtonMarginBlue, ButtonSecondary, ButtonTitle } from "../Button/style";
import { LinkBlueMontserrat } from "../Links/style";
import { TextGrayCancelModal } from "../Text/style";

export const CancellationModal = ({visible, setShowModalCancel, ...rest}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <Title>Cancelar Consulta</Title>

            <TextGrayCancelModal>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</TextGrayCancelModal>

            <ButtonMarginBlue onPress={() => setShowModalCancel(false)}>
                <ButtonTitle>Confirmar</ButtonTitle>
            </ButtonMarginBlue>

            <LinkBlueMontserrat>Cancelar</LinkBlueMontserrat>
        </Modal>
    );
}