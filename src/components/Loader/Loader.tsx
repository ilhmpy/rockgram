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
    const [loadCircles, setLoadCircles] = useState<number[]>([30, 100, 100, 100, 100, 100]);

    if (isLoad) {
        setTimeout(() => {
            let oldIndex: number = 0;
            let newCircles: number[] = [];

            loadCircles.forEach((circle, idx) => {
                if (circle == 30) {
                    oldIndex = idx;
                };
            });

            loadCircles.forEach((circle, idx) => {
                if (oldIndex == loadCircles.length - 1) {
                    if (idx == 0) {
                        newCircles.push(30)
                    } else {
                        newCircles.push(100);
                    }
                } else {
                    if (idx == oldIndex + 1) {
                        newCircles.push(30);
                    } else {
                        newCircles.push(100);
                    };
                }
            });

            setLoadCircles(newCircles);
        }, 120);

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
    background: ${({ view }) => view == 30 ? "#1C3947" : "rgb(137, 207, 240)"};
    position: absolute;
    transition: 0.5s;

    &:nth-child(1) {
        right: 25px;
        top: -8px;   
    }

    &:nth-child(2) {
        top: 8px;
        right: -6px;
    }

    &:nth-child(3) {
        bottom: 8px;
        right: -6px;
    }

    &:nth-child(4) {
        bottom: -9px;
        left: 25px;
    }

    &:nth-child(5) {
        bottom: 8px;
        left: -6px;
    }

    &:nth-child(6) {
        top: 8px;
        left: -6px;
    }
`