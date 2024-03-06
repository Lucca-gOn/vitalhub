import { Marker } from "react-native-maps";
import { Container } from "../../components/Container/Style";
import { MapLocal } from "./style";
import { MapContent } from "../../components/Content/Style";
import { Subtitle, Title, TitleCalendar } from "../../components/Title/Style";

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
            </MapContent>
        </Container>
    )
}
