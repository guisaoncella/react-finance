import { useEffect, useState } from "react";
import { Body, Container, Header, HeaderText } from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./util/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

const App = () => {
    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth));
    },[list, currentMonth])

    const handleMonthChange = (newMonth: string) =>{
        setCurrentMonth(newMonth);
    }

    return(
        <Container>
            <Header>
                <HeaderText>Sistema Financeiro</HeaderText>
            </Header>
            <Body>
                <InfoArea 
                    currentMonth={currentMonth}
                    onMonthChange={handleMonthChange}
                    income={income}
                    expense={expense}
                />
                <TableArea list={filteredList}/>
            </Body>
        </Container>
    );
}

export default App;