import { ThemeConfig } from "../../configs/Theme.config"
import { useTranslation } from "react-i18next";

import { Modal, FlexCenter, Input, Button } from "../../components"
import { SignTitle } from "./Sign.styles";
import { useEffect, useState } from "react";

type Wizords = {
    name: string;
    isPassed: boolean;
}

export const Sign = () => {
    const { t } = useTranslation();
    const [nameValue, setNameValue] = useState<string>("");
    const [nameModal, setNameModal] = useState<boolean>(true);
    const [passwordModal, setPasswordModal] = useState<boolean>(false);

    const handleNameNextButton = () => {
        setNameModal(false);
        setPasswordModal(true);
    };

    return (
        <FlexCenter bgColor={ThemeConfig.mainBackground}>
            <Modal>
                <SignTitle>{t("SignPage.welcomeText")}</SignTitle>
                {nameModal && (
                    <>
                        <Input 
                            setValue={setNameValue} 
                            value={nameValue} 
                            phText={t("SignPage.namePlaceholder")}
                            maxLng={9}
                        />
                        {nameValue.length === 9 && (
                            <Button onClick={handleNameNextButton}>
                                {t("SignPage.nameButton")}
                            </Button>
                        )}
                    </>
                )}
            </Modal>
        </FlexCenter>
    )
}