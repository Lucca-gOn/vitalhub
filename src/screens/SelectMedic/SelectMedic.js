import { ButtonMedicalRecord, ButtonTitle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { ContentLinkCenter } from "../../components/Content/Style";
import { LinkBlueMontserratMargin } from "../../components/Links/Style";
import { SelectMedicCard } from "../../components/SelectMedicCard/SelectClinicCard";
import { TitleSelectClinic } from "../../components/Title/Style";

export function SelectMedic () {
    return(
        <Container>
            <TitleSelectClinic>Selecionar médico</TitleSelectClinic>
            <SelectMedicCard title={"Dra Alessandra"} subtitle={"Demartologa, Esteticista"} source="https://github.com/MagiLogus.png"/>
            <SelectMedicCard title={"Dr Kumushiro"} subtitle={"Demartologa, Esteticista"} source="https://github.com/MagiLogus.png"/>
            <SelectMedicCard title={"Dr Rodrigo Santos"} subtitle={"Demartologa, Esteticista"} source="https://github.com/MagiLogus.png"/>
            <SelectMedicCard title={"Dr Rodrigo Santos"} subtitle={"Demartologa, Esteticista"} source="https://github.com/MagiLogus.png"/>

            <ButtonMedicalRecord style={{ width: '90%' }}> 
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonMedicalRecord>

            <ContentLinkCenter style={{ width: '90%' }}>
                <LinkBlueMontserratMargin>Cancelar</LinkBlueMontserratMargin>
            </ContentLinkCenter>
        </Container>
    )
}