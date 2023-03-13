import React, { FC, ReactComponentElement } from "react";
import styled from "styled-components"

interface FlexCenterInterface {
    children: any;
    bgColor?: string;
}

export const FlexCenter: FC<FlexCenterInterface> = ({ children, bgColor }) => {
    const backgroundColor = bgColor;

    return (
        <FlexBox style={{ backgroundColor }}>
            {children}
        </FlexBox>
    )
}

const FlexBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;  