import { FC, useEffect, useState } from "react";
import styled from "styled-components";

type LoaderType = {
    children: any;
    isLoad: boolean;
}

type LoadCircleItemType = {
    view: number;
}

export const Loader: FC<LoaderType>  = ({ children, isLoad }) => {
    const [loadCircles, setLoadCircles] = useState([100, 100, 100, 100, 100, 30]);

    /* setTimeout(() => {
        setLoadCircles((state) => {
            let newState: number[] = [];
            const oldItem = state.find((item) => item == 30);

            if (oldItem) {
                const oldIndex = state.indexOf(oldItem);
                let newIndex = 0;

                for (let i = 0; newState.length < state.length; i++) {
                    newState = [100, ...newState];
                }
            }

            return newState;
        })
    }, 5000);*/

    if (isLoad) {
        return (
            <LoaderContainer>
                <LoadCircle>
                    {loadCircles.map((circle: number, idx) => (
                        <LoadCircleItem key={idx} view={circle} />
                    ))}
                </LoadCircle>
            </LoaderContainer>
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}

const LoaderContainer = styled.div`
    width: 100%;
    height: 400px;
    background: rgb(255, 250, 240);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: not-allowed;
`

const LoadCircle = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: relative;
    animation: 1s linear infinite spinner;

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

const LoadCircleItem = styled.div<LoadCircleItemType>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(137, 207, 240);
    position: absolute;
    transition: 0.5s;
    opacity: ${({ view }) => view}%;

    &:nth-child(1) {
        right: 25px;
        top: -8px;   
    }

    &:nth-child(2) {
        top: 8px;
        right: -6px;
    }

    &:nth-child(3) {
        top: 8px;
        left: -6px;
    }

    &:nth-child(4) {
        bottom: 8px;
        left: -6px;
    }

    &:nth-child(5) {
        bottom: 8px;
        right: -6px;
    }

    &:nth-child(6) {
        bottom: -9px;
        left: 25px;
    }
`