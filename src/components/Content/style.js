import styled from "styled-components";

export const ContentAccount = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: center;
    margin-top: 30;
`
export const ContentCheckEmail = styled.View`
    flex-direction: row;
    gap: 20px;
`
export const ContentStatus = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-between;

    margin: 38px 0px 20px;
`
export const ContentFlatList = styled.FlatList`
    width: 90%;
    height: 216px;
    justify-content: space-between;
`
export const ModalContent = styled.View`
    width: 90%;
    height: 310px;
    padding: 30px 30px 10px;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
`

export const ModalContentMedicalRecord = styled(ModalContent)`
    height: 530px;
    padding: 30px 24px 20px 25px;
`
export const ContentTextModalPatient = styled.View`
    flex-direction: row;
    width: 100%;
    gap: 20px;
    justify-content: center;

    margin-top: 12px;
`
export const InsertMedicalRecordContent = styled.SafeAreaView`

`
export const ContentTextMedicalRecord = styled(ContentTextModalPatient)`
    margin: 0px 0px 24px 0px;
`
export const InputWithTitleContent = styled.View`
    width: 320px;
    align-items: flex-start;
`
export const ContentLinkCenter = styled.View`
    width: 100%;
    align-items: center;
`
export const ContentIconPatientQuery = styled.View`
    width: 90%;
    align-items: flex-end;
`

export const ContentSquareIcon = styled.TouchableOpacity `
    width: 60px;
    height: 60px;
    background-color: #49B3BA;
    border-radius: 7px;

    align-items: center;
    justify-content: center;

    shadow-color: black;
    shadow-offset: 4px 4px;
    shadow-opacity: 0.5;
    shadow-radius: 10px;
`
export const ModalContentSchedule = styled(ModalContent)`
    width: 100%;
    height: 518px;

`