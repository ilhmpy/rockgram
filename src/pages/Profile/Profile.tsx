import styled from "styled-components"
import { WhiteContainer } from "../../components"

export const Profile = () => {
    return (
        <div>
            <WhiteContainer>
                <Flex>
                    <ProfileAvatar></ProfileAvatar>
                    <ProfileBlock>
                        <ProfileName>Name Vorname</ProfileName>
                    </ProfileBlock>
                </Flex>
            </WhiteContainer>
        </div>
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
`;