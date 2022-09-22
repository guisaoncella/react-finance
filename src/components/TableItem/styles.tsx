import styled from "styled-components";

export const TableLine = styled.tr`
`;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.span<{color: string}>`
    display: inline-block;
    padding: 5px 5px;
    border-radius: 5px;
    color: #FFF;
    font-weight: 600;
    text-shadow: 0 0 2px black;
    background-color: ${props => props.color};
`;

export const Value = styled.span<{expense: boolean}>`
    font-weight: 600;
    color: ${props => props.expense ? 'red' : 'green'}
`;