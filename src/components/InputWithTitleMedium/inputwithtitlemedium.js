import { Container } from "../Container/style";
import { InputWithTitleContent } from "../Content/style";
import { InputLarge, InputMedium } from "../Input/style";
import { TitleWithInput } from "../Title/style";

export function InputWithTitleMedium({ title, placeholder, }) {
    return (
        <Container>
            <InputWithTitleContent>
                <TitleWithInput>{title}</TitleWithInput>

                <InputMedium placeholder={placeholder} />
            </InputWithTitleContent>
        </Container>
    );
};