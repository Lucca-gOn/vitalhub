import { ButtoTitleStatus, ButtonStatus } from "./style"


export const StatusQuery = ({textButton, clickButton=false, onPress}) => {
    return (
        <ButtonStatus clickButton={clickButton} onPress={onPress}>

            <ButtoTitleStatus clickButton={clickButton}>{textButton}</ButtoTitleStatus>

        </ButtonStatus>
    )
}