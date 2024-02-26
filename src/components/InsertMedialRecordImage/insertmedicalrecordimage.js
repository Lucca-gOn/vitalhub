import { InsertMedicalRecordImageContainer } from "../Container/style";
import { InsertMedicalRecordContent } from "../Content/style";
import { InsertMedicalRecordImageProfile } from "./style";


export function InsertMedicalRecordImage() {
    return(
        <InsertMedicalRecordImageContainer>
            <InsertMedicalRecordContent>
                <InsertMedicalRecordImageProfile source={{ uri: "https://github.com/MagiLogus.png" }}/>
            </InsertMedicalRecordContent>
        </InsertMedicalRecordImageContainer>
    );
};