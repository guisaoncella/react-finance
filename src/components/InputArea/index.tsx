import { Item } from "../../types/Item";
import { Container } from "./styles";
import {categories} from "../../data/categories";
import { useState } from "react";

type Props = {
    onAddItem: (item: Item) => void
}

export const InputArea = ({onAddItem}: Props) => {
    const [date, setDate] = useState(new Date());
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);

    const handleAddItem = () => {
        //verify null
        if(!category || !title || !value || !Date.parse(date.toDateString())){
            alert('Não é permitido campos em branco')
            return
        }
        
        //verify positive value
        if(value < 0){
            alert('Não é permitido valor negativo')
            return
        }
        
        let newItem: Item = {
            date: date,
            category: category,
            title: title,
            value: Math.trunc((value*100))
        }
        onAddItem(newItem);
    }

    const handleChangeDate = (value: string) => {
        let [year, month, day] = value.split('-');
        setDate(new Date(parseInt(year), parseInt(month) - 1, parseInt(day)))
    }

    return(
        <Container>
            <label htmlFor="date">Data: </label>
            <input type='date' id="date" onChange={(e) => handleChangeDate(e.target.value)}/>

            <label htmlFor="title">Título: </label>
            <input type='text' id="title" onChange={(e) => setTitle(e.target.value)}/>

            <label htmlFor="category">Categoria: </label>

            <select name="Categoria" id="category" onChange={(e) => setCategory(e.target.value)}>
                <option value=""></option>
                { Object.entries(categories).map((t,k) =>
                    <option key={k} value={t[0]}>{t[1].title}</option>)
                }
            </select>

            <label htmlFor="value">Valor: </label>
            <input type='number' id="value" min={0} step={0.1} onChange={(e) => setValue(parseFloat(e.target.value))}/>

            <button onClick={handleAddItem}>Adicionar</button>
        </Container>
    );
}