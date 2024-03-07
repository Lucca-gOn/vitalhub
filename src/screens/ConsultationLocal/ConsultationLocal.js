import { Marker } from "react-native-maps";
import { Container } from "../../components/Container/Style";
import { MapLocal } from "./style";
import { DoubleView, MapContent, ViewColum } from "../../components/Content/Style";
import { Subtitle, Title, TitleCalendar } from "../../components/Title/Style";
import { ScrollForm } from "../InsertMedicalRecord/style";
import { BoxInput, InputDouble, InputLabel, InputNotEditable } from "../../components/Input/Style";
import { ViewRow } from "../../components/CardQuery/Style";

export function ConsultationLocal() {
    return (
        <Container>
            <MapLocal // Alterado para usar MapLocal
                initialRegion={{
                    latitude: -23.6152959,
                    longitude: -46.5708332,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: -23.6152959,
                        longitude: -46.5708332,
                    }}
                    title="Niteroi, 180"
                    description="São Caetano do Sul, São Paulo"
                />
            </MapLocal>
            <MapContent>
                <TitleCalendar>Clínica Natureh</TitleCalendar>
                <Subtitle>São Paulo , SP</Subtitle>

                <ViewColum style={{ width: '90%' }}>
                    <InputLabel>Endereço</InputLabel>
                    <InputNotEditable
                        placeholder="Rua Vicenso Silva, 987"
                    />
                </ViewColum>

                <DoubleView>
                    <ViewColum>
                        <InputLabel>Número</InputLabel>
                        <BoxInput>
                            <InputDouble
                                placeholder="578"
                            />
                        </BoxInput>
                    </ViewColum>

                    <ViewColum>
                        <InputLabel>Bairro</InputLabel>
                        <BoxInput>
                            <InputDouble
                                placeholder="Moema-SP"
                            />
                        </BoxInput>
                    </ViewColum>

                </DoubleView>
            </MapContent>

        </Container>
    )
}
