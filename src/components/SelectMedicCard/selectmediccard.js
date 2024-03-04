import { ProfileName } from "../CardQuery/style"
import {  ContainerMedicCard, ImageSelectMedic, MedicSpecialty} from "./style"
import { ContentText } from "../Content/style"
import { ContainerCardsListCard } from "../SelectClinicCard/style"

export const SelectMedicCard = ({ title, subtitle, source }) => {
    return (
        <ContainerMedicCard>
            <ImageSelectMedic source={{ uri: source }} />

            <ContentText>
                <ProfileName>{title}</ProfileName>
                <MedicSpecialty>{subtitle}</MedicSpecialty>
            </ContentText>
        </ContainerMedicCard>
    )
}

