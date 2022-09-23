import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    margin-left: 10px;
    text-align: center;
    font-weight: bold;
`;

export const Title = styled.div`
    color: #444;
    margin-bottom: 5px;
`;

export const Value = styled.div<{color?: string}>`
    color: ${props => props.color ? `${props.color}` : '#000'};
`;