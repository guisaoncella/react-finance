import styled from "styled-components";
import { mainColors, font } from "./Theme";

export const Container = styled.div`
    font-family: ${font};
`;

export const Header = styled.header`
    background-color: ${mainColors.darkBlue};
    height: 150px;
    text-align: center;
`;

export const HeaderText = styled.h1`
    color: ${mainColors.white};
    font-weight: 800;
    padding-top: 30px;
`;

export const Body = styled.main`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`;
