import { Container, Title, Value } from "./styles";

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({title, value, color}: Props) => {
    return(
        <Container>
            <Title>{title}</Title>
            <Value color={color}>{`R$ ${value.toLocaleString('pt-BR',{minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</Value>
        </Container>
    );
}