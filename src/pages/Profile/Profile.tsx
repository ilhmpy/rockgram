import { useContext, useState } from "react";
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { WhiteContainer } from "../../components"
import { Context } from "../../AppContext";
import { Loader } from "../../components";

interface ProfileFieldType {
    field: string;
}

interface ProfileDropType extends ProfileFieldType {
    isHide: boolean;
}

export const Profile = () => {
    const { t } = useTranslation();
    const { user } = useContext(Context);
    const [aboutMySelfHide, setAboutMySelfHide] = useState<boolean>(false);
    const [rockGenresHide, setRockGenresHide] = useState<boolean>(false);

    return (
        <Loader isLoad={user == null}>
            <WhiteContainer>
                <Flex>
                    <ProfileAvatar></ProfileAvatar>
                    <ProfileBlock>
                        <ProfileName>{user?.name}</ProfileName>
                        <ProfileFields>
                            <ProfileField field={t("ProfilePage.ProfileFields.years")}>{user?.yearsOld}</ProfileField>
                            <ProfileField field={t("ProfilePage.ProfileFields.citizenship")}>{user?.citizensheep}</ProfileField>
                            <ProfileField field={t("ProfilePage.ProfileFields.city")}>{user?.city}</ProfileField>
                        </ProfileFields>
                        <ProfileDrop 
                            isHide={aboutMySelfHide} 
                            onClick={() => setAboutMySelfHide(!aboutMySelfHide)}
                            field={t("ProfilePage.ProfileFields.aboutme")}
                        >
                            <div>{user?.aboutme}</div>
                        </ProfileDrop>
                        <ProfileDrop 
                            isHide={rockGenresHide}
                            onClick={() => setRockGenresHide(!rockGenresHide)} 
                            field={t("ProfilePage.ProfileFields.genres")}
                        >
                            <div>
                                
                            </div>
                        </ProfileDrop>
                    </ProfileBlock>
                </Flex>
            </WhiteContainer>
        </Loader>
    )
}

const Flex = styled.div`
    width: 100%;
    display: flex;
`;

const ProfileAvatar = styled.div`
    width: 180px;
    height: 200px;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid rgb(137, 207, 240);
    margin-right: 15px;
`;

const ProfileBlock = styled.div`
    width: 100%;
    height: auto;
    padding-top: 5px;
`

const ProfileName = styled.h3`
    line-height: 20px;
    margin-bottom: 20px;
`;

const ProfileFields = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    margin-bottom: 35px;
`;

const ProfileField = styled.div<ProfileFieldType>`
    font-size: 15px;
    height: auto;
    width: 9%;
    line-height: 20px;
    display: block;
    position: relative;
    padding-top: 15px;
    margin-right: 10px;

    &:first-child {
        width: 5.5%;
    }

    ${({ field }) => (
        field && `
            &:before {
                content: "${field}";
                display: block;
                position: absolute;
                font-size: 13px;
                top: 0;
                width: 100%;
            }
        `
    )}
`;

const ProfileDrop = styled.div<ProfileDropType>`
    width: 40%;
    position: relative;
    border-radius: 20px;
    border: 2px solid rgb(137, 207, 240);
    font-size: 13px;
    transition: 1s;
    margin-bottom: 25px;
    padding: 15px;
    padding-top: 20px;

    ${({ isHide }) => {
        if (!isHide) {
            return `
                height: 0px;
                padding: 0;
            `;
        } else {
            return `
                height: 83px;
            `;
        }
    }}

    div {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    ${({ field }) => (
        field && `
            &:before {
                content: "${field}";
                cursor: pointer;
                width: 100px;
                height: 25px;
                display: flex;
                position: absolute;
                color: #fff;
                font-size: 14px;
                top: -12px;
                left: 15px;
                background: rgb(137, 207, 240);
                border-radius: 10px;
                padding: 3px;
                box-sizing: border-box;
                justify-content: center;
                align-items: center;
            }
        `
    )}       
`;