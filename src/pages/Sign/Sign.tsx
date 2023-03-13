import { ThemeConfig } from "../../configs/Theme.config"
import { useTranslation } from "react-i18next";

import { Modal, FlexCenter, Input } from "../../components"
import { SignTitle } from "./Sign.styles";
import { useState } from "react";

export const Sign = () => {
    const { t } = useTranslation();
    const [nameValue, setNameValue] = useState<string>("");

    return (
        <FlexCenter bgColor={ThemeConfig.mainBackground}>
            <Modal>
                <SignTitle>{t("SignPage.welcomeText")}</SignTitle>
                <Input setValue={setNameValue} value={nameValue} phText={t("SignPage.namePlaceholder")} />
            </Modal>
        </FlexCenter>
    )
}