import { User, RockGenres } from "../../../types"
import { Loader, WhiteContainer } from "../../../components";
import { FC, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { genresKind } from "../../../functions";

type ProfileBannerType = {
    user: User;
}

interface ProfileFieldType {
    field: string;
}

interface ProfileDropType extends ProfileFieldType {
    isHide: boolean;
    heightCont?: string | number;
}

type RockGenreType = {
    kind: number;
}

export const ProfileBanner: FC<ProfileBannerType> = ({ user }) => {
    const { t } = useTranslation();
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
                        <div className="profilecontainer">{user?.aboutme}</div>
                    </ProfileDrop>
                    <ProfileDrop 
                        isHide={rockGenresHide}
                        onClick={() => setRockGenresHide(!rockGenresHide)} 
                        field={t("ProfilePage.ProfileFields.genres")}
                        heightCont={user?.rockGenres ?  user?.rockGenres.length * 20 : 'auto'}
                    >
                        <ProfileRockGenres>
                            {user?.rockGenres.map((genr, idx) => (
                                <ProfileRockGenre key={idx} kind={genr}>{genresKind(genr)}</ProfileRockGenre>
                            ))}
                        </ProfileRockGenres>
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
                height: ${({ heightCont }: any) => heightCont ? heightCont : "83px"};
            `;
        }
    }}

    .profilecontainer {
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

const ProfileRockGenres = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding-top: 10px;
    padding-left: 2px;
`;

const ProfileRockGenre = styled.div<RockGenreType>`
    width: auto;
    height: 20px;
    padding: 10px;
    border-radius: 10px;
    background: #89D1C5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    user-select: none;  
    color: #fff;

    ${({ kind }) => {
        switch (typeof kind == "number") {
            case (kind == RockGenres.blackmetal): {
                return `
                    background: black;
                    color: #fff;
                `
            }

            case (kind == RockGenres.deathcore): {
                return `
                    background: #776E6E;
                `
            }

            case (kind == RockGenres.deathmetal): {
                return `
                    background: #A29696;
                `
            }

            case (kind == RockGenres.glammetal): {
                return `
                    background: #E86464;
                `
            }

            case (kind == RockGenres.punkrock): {
                return `
                    background: #FFFF14;
                    color: #000;
                `
            }

            case (kind == RockGenres.metalcore): {
                return `
                    background: #665DE2;
                `
            }

            case (kind == RockGenres.symphonicblackmetal): {
                return `
                    background: #41404D;
                `
            }

            case (kind == RockGenres.symphonicdeathmetal): {
                return `
                    background: #AF9B9B;
                `
            }

            case (kind == RockGenres.heavymetal): {
                return `
                    background: #FF8AE1;
                `
            }

            case (kind == RockGenres.hardcore): {
                return `
                    background: #FF7321;
                `
            }
        }
    }}
`;