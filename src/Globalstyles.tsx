import { createGlobalStyle } from "styled-components";
import { ThemeConfig } from "./configs/Theme.config";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: ${() => ThemeConfig.defaultTextColor};
        font-family: 'Germania One', cursive;
    }
    
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
    }

    h1, h2, h3 {
        padding: 0;
        margin: 0;
        line-height: 0;
    }

    button {
        outline: none;
        background: 0;
        border: 0;
    }

    input {
        outline: none;
        border: 0;
        background: 0;
        padding: 15px 15px;

        &::-webkit-input-placeholder { 
            color: #fff;
            font-size: 15px; 
        }
    }

    #root {
        height: 100%;
    }
`;