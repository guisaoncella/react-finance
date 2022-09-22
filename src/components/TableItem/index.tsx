import { categories } from "../../data/categories";
import { Item } from "../../types/Item";
import { Category, TableColumn, TableLine, Value } from "./styles";

type Props = {
    item: Item;
}

export const TableItem = ({item}: Props) => {
    const value = (item.value/100)
    return(
        <TableLine>
            <TableColumn>{item.date.toLocaleDateString('pt-BR')}</TableColumn>    
            <TableColumn>
                <Category color={categories[item.category].color}>
                    {categories[item.category].title} 
                </Category>   
            </TableColumn>    
            <TableColumn>{item.title}</TableColumn>    
            <TableColumn>
                <Value expense={categories[item.category].expense}>
                    {`R$ ${value.toLocaleString('pt-BR',{minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
                </Value>
            </TableColumn>    
        </TableLine>
    );
}