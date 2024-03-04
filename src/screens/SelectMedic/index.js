import { ButtonMedicalRecord, ButtonTitle } from "../../components/Button/style";
import { Container } from "../../components/Container/style";
import { ContentLinkCenter } from "../../components/Content/style";
import { LinkBlueMontserratMargin } from "../../components/Links/style";
import { SelectMedicCard } from "../../components/SelectMedicCard/selectmediccard";
import { TitleSelectClinic } from "../../components/Title/style";

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