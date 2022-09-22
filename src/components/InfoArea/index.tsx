import { formatCurrentMonth } from "../../util/dateFilter";
import { Container, MonthArea, MonthArrow, MonthTitle, ResumeArea } from "./styles";

type Props = {
    currentMonth: string;
}

export const InfoArea = ({currentMonth}: Props) => {
    return (
        <Container>
            <MonthArea>
                <MonthArrow>⬅️</MonthArrow>
                <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
                <MonthArrow>➡️</MonthArrow>
            </MonthArea>
            <ResumeArea>

            </ResumeArea>
        </Container>
    );
}