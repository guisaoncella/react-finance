import { categories } from "../../data/categories";
import { Item } from "../../types/Item";
import { TableColumn, TableLine } from "./styles";

type Props = {
    item: Item;
}

export const TableItem = ({item}: Props) => {
    const value = (item.value/100)
    return(
        <TableLine>
            <TableColumn>{item.date.toLocaleDateString('pt-BR')}</TableColumn>    
            <TableColumn>{categories[item.category].title}</TableColumn>    
            <TableColumn>{item.title}</TableColumn>    
            <TableColumn>{`R$ ${value.toLocaleString('pt-BR',{minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
            </TableColumn>    
        </TableLine>
    );
}