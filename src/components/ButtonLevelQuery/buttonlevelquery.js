import { ButtoTitleStatus, ButtonStatus } from "../StatusQuery/style"
import { ButtoLevelQueryTitleStatus, ButtonLevelQueryStyle } from "./style"

export const ButtonLevelQuery = ({textButton, clickButton=false, onPress}) => {
    return (
        <ButtonLevelQueryStyle clickButton={clickButton} onPress={onPress}>
            <ButtoLevelQueryTitleStatus clickButton={clickButton}>{textButton}</ButtoLevelQueryTitleStatus>
        </ButtonLevelQueryStyle>
    )
}