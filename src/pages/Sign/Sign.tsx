import { ThemeConfig } from "../../configs/Theme.config"
import { useTranslation } from "react-i18next";

import { Modal, FlexCenter, Input, Button } from "../../components"
import { SignTitle } from "./Sign.styles";
import { FC, useEffect, useState } from "react";

type ModalFields = {
    value: string;
    valueLng: number;
    setValue: (value: string) => void;
    placeholder: string;
    buttonName: string;
    handleButton: (e: any) => void;
    comp: (value: string) => boolean;
    errorComp: string;
}

export const Sign = () => {
    const { t } = useTranslation();
    const [nameValue, setNameValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [wizordType, setWizordType] = useState<0 | 1>(0);

    const handleNextButton = () => {
        setWizordType(wizordType == 0 ? 1 : 0);
    };

    const handlePasswordButton = () => {
        
    }

    return (
        <FlexCenter bgColor={ThemeConfig.mainBackground}>
            <Modal>
                <SignTitle>{t("SignPage.welcomeText")}</SignTitle>
                {wizordType == 0 && (
                    <ModalFields 
                        value={nameValue}
                        setValue={setNameValue}
                        placeholder={"SignPage.namePlaceholder"}
                        valueLng={9}
                        buttonName={"SignPage.nameButton"}
                        handleButton={handleNextButton}
                        comp={(value: string) => value.length < 9}
                        errorComp={"length"}
                    />
                )}

                {wizordType == 1 && (
                    <ModalFields 
                        value={passwordValue}
                        setValue={setPasswordValue}
                        placeholder={"SignPage.passwordPlaceholder"}
                        valueLng={10}
                        buttonName={"SignPage.passwordButton"}
                        handleButton={handlePasswordButton}
                        comp={(value: string) => value.length < 10}
                        errorComp={"password"}
                    />
                )}
            </Modal>
        </FlexCenter>
    )
}

const ModalFields: FC<ModalFields> = ({ 
    value, 
    valueLng,
    setValue, 
    placeholder, 
    buttonName,
    handleButton,
    comp,
    errorComp 
}) => {
    const { t } = useTranslation();

    return (
        <>
            <Input 
                setValue={setValue} 
                value={value} 
                phText={t(placeholder)}
                maxLng={valueLng}
                comp={comp}
                errorComp={errorComp}
            />
            {value.length === valueLng && (
                <Button onClick={handleButton}>
                    {t(buttonName)}
                </Button>
            )}
        </>
    )
}