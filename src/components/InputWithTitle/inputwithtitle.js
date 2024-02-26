import { Container } from "../Container/style";
import { InputWithTitleContent } from "../Content/style";
import { InputLarge } from "../Input/style";
import { TitleWithInput } from "../Title/style";

export function InputWithTitle({ title, placeholder, }) {
    return (
        <Container>
            <InputWithTitleContent>
                <TitleWithInput>{title}</TitleWithInput>

                <InputLarge placeholder={placeholder} />
            </InputWithTitleContent>
        </Container>
    );
};