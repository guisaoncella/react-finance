import { formatCurrentMonth } from "../../util/dateFilter";
import { ResumeItem } from "../ResumeItem";
import { Container, MonthArea, MonthArrow, MonthTitle, ResumeArea } from "./styles";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;    
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {
    const handleChangeMonth = (i: number) => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month), 1);
        currentDate.setMonth(currentDate.getMonth() + i);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}}`);
    }

    return (
        <Container>
            <MonthArea>
                <MonthArrow onClick={() => handleChangeMonth(-1)}>⬅️</MonthArrow>
                <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
                <MonthArrow onClick={() => handleChangeMonth(1)}>➡️</MonthArrow>
            </MonthArea>
            <ResumeArea>
                <ResumeItem title="Receitas" value={income} color='green' />
                <ResumeItem title="Despesas" value={expense} color='red' />
                <ResumeItem title="Balanço" value={income - expense} color={(income - expense) >= 0 ? 'green' : 'red'} />
            </ResumeArea>
        </Container>
    );
}