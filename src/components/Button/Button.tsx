import styled from "styled-components";

type ButtonType = {
    width?: string | number;
}

export const Button = styled.button<ButtonType>`
    width: ${({ width }) => width ? width : "92%"};
    height: 50px;
    transition: 0.5s;
    background: #89CFF0;
    color: #fff;
    border-radius: 10px;
    font-size: 16px;

    &:hover {
        background: #76A5BD;
    }
`;