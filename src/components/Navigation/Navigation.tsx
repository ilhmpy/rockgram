import styled from "styled-components"
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type NavigationMenuLinkType = {
    to: string;
    children: any;
}

//@ts-ignore
export const Navigation = ({ children }) => {
    const { t } = useTranslation();

    return (
      <NavigationContainer>
        <NavigationMenu>
            <NavigationMenuLink to="/profile">{t("NavigationMenu.profile")}</NavigationMenuLink>
            <NavigationMenuLink to="/friends">{t("NavigationMenu.friends")}</NavigationMenuLink>
            <NavigationMenuLink to="/posts">{t("NavigationMenu.posts")}</NavigationMenuLink>
            <NavigationMenuLink to="/music">{t("NavigationMenu.music")}</NavigationMenuLink>
        </NavigationMenu>
        <NavigationContentContainer>
            {children}
        </NavigationContentContainer>
      </NavigationContainer>  
    )
}

const NavigationMenuLink: FC<NavigationMenuLinkType> = ({ children, to }) => {
    const navigation = useNavigate();
    return (
        <NavigationMenuItem onClick={() => navigation(to)}>{children}</NavigationMenuItem>
    )
}

const NavigationContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    display: flex;
    max-width: 1960px;
    min-width: 1500px;
`;

const NavigationMenu = styled.div`
    width: 13%;
    height: 203px;
    background: rgb(255, 250, 240);
    margin-right: 50px;
    border-radius: 10px;
    border: 2px solid rgb(137, 207, 240);
    user-select: none;
`;

const NavigationMenuItem = styled.a`
    width: 100%;
    height: 50px;
    cursor: pointer;
    display: block;
    display: flex;
    align-items: center;
    transition: 0.1s;
    border-radius: 5px;
    padding-left: 20px;
    color: #191970;

    &:hover {
        background: rgb(137, 207, 240);
        color: #fff;
    }
`;

const NavigationContentContainer = styled.div`
    padding: 20px;
    width: 100%;
`;