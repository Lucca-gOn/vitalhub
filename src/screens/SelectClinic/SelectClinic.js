import { ButtonMedicalRecord, ButtonTitle } from "../../components/Button/Style";
import { Container, ContainerSelectClinic } from "../../components/Container/Style";
import { ContentLinkCenter } from "../../components/Content/Style";
import { LinkBlueMontserratMargin } from "../../components/Links/Style";
import { SelectClinicCard } from "../../components/SelectClinicCard/selectcliniccard";
import { Title, TitleSelectClinic } from "../../components/Title/Style";

export function SelectClinic() {
    return (
        <Container>
            <TitleSelectClinic>Selecionar clínica</TitleSelectClinic>
            <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
            <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
            <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
            <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />

            <ButtonMedicalRecord style={{ width: '90%' }}> 
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonMedicalRecord>

            <ContentLinkCenter style={{ width: '90%' }}>
                <LinkBlueMontserratMargin>Cancelar</LinkBlueMontserratMargin>
            </ContentLinkCenter>
        </Container>
    );
}