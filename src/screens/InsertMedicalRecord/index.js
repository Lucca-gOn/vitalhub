import { Button, ButtonMedicalRecord, ButtonMedicalRecordEdit, ButtonTitle } from "../../components/Button/style";
import { Container } from "../../components/Container/style";
import { ContentLinkCenter, ContentTextMedicalRecord, ContentTextModalPatient } from "../../components/Content/style";
import { InputMedium } from "../../components/Input/style";
import { InputWithTitle } from "../../components/InputWithTitle/inputwithtitle";
import { InputWithTitleMedium } from "../../components/InputWithTitleMedium/inputwithtitlemedium";
import { InsertMedicalRecordImage } from "../../components/InsertMedialRecordImage/insertmedicalrecordimage";
import { LinkBlueMontserratMargin } from "../../components/Links/style";
import { TextGrayModalPatient } from "../../components/Text/style";
import { Title, TitleMedicalRecord } from "../../components/Title/style";
import { ScrollForm } from "./style";

export function InsertMedicalRecord() {
    return (
        <Container>
            <InsertMedicalRecordImage />

            <TitleMedicalRecord>Paulo Henrique</TitleMedicalRecord>

            <ContentTextMedicalRecord>
                <TextGrayModalPatient>26 Anos</TextGrayModalPatient>
                <TextGrayModalPatient>paulo.oliveira@gmail.com</TextGrayModalPatient>
            </ContentTextMedicalRecord>
            <ScrollForm showsVerticalScrollIndicator={false}>
                <InputWithTitle title={"Descrição da consulta"} placeholder={"Descrição"} />
                <InputWithTitleMedium title={"Diagnóstico do paciente"} placeholder={"Diagnóstico"} />
                <InputWithTitle title={"Prescrição médica"} placeholder={"Prescrição"} />

                <ButtonMedicalRecord>
                    <ButtonTitle>Salvar</ButtonTitle>
                </ButtonMedicalRecord>

                <ButtonMedicalRecordEdit>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonMedicalRecordEdit>

                <ContentLinkCenter>
                    <LinkBlueMontserratMargin>Cancelar</LinkBlueMontserratMargin>
                </ContentLinkCenter>
            </ScrollForm>
        </Container>

    );
};