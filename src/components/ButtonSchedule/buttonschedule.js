import { ContentIconPatientQuery, ContentSquareIcon } from "../Content/style";
import { IconStethoscope } from "../Icon/style";

export const ButtonSchedule = ({
    onPressSchedule
}) => {
    return (
        <ContentSquareIcon onPress={onPressSchedule}>
            <IconStethoscope />
        </ContentSquareIcon>
    );
};