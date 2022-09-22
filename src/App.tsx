import { useEffect, useState } from "react";
import { Body, Container, Header, HeaderText } from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./util/dateFilter";

const App = () => {
    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth));
    },[list, currentMonth])

    return(
        <Container>
            <Header>
                <HeaderText>Sistema Financeiro</HeaderText>
            </Header>
            <Body>
                ...
            </Body>
        </Container>
    );
}

export default App;