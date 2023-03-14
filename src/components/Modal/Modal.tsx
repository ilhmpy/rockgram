import styled from "styled-components";
import { FC } from "react";
import { ThemeConfig } from "../../configs/Theme.config";

interface ModalInterface {
    children: any;
}

export const Modal: FC<ModalInterface> = ({ children }) => {
    return (
        <ModalComponent>
            {children}
        </ModalComponent>
    )
}

const ModalComponent = styled.div`
    width: 450px;
    height: auto;
    border-radius: 15px;
    background: ${() => ThemeConfig.modalBackground};
    padding: 50px;
    padding-bottom: 25px;
    transition: 1s;
    display: flex;
    flex-direction: column;
`;
