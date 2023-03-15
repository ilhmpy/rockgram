import { FC, useState } from "react"
import { useTranslation } from "react-i18next";
import styled from "styled-components"

interface InputInterface {
    phText: string;
    setValue: (value: string) => void;
    value: string;
    maxLng: number;
    comp: (value: string) => boolean;
    errorComp: string;
}

interface Validation {
    reason: string | null;
    validation: boolean;
}

export const Input: FC<InputInterface> = ({
    phText,
    setValue,
    value,
    maxLng,
    comp,
    errorComp
}) => {
    const defaultIsValidation: Validation = {
        reason: null,
        validation: true,
    }
    const [isValidation, setIsValidation] = useState<Validation>(defaultIsValidation);
    const { t } = useTranslation();

   const onChangeHolder = (e: any) => {
       const value = e.target.value;

       if (comp(value) && value.length > 0) {
            setIsValidation({
                reason: t(`ValidErrors.${errorComp}`),
                validation: false
            });
       } else {
            setIsValidation(defaultIsValidation);
       } 

       setValue(value);
   };
 
   return (
        <>
            <InputComponent 
                placeholder={phText} 
                onChange={onChangeHolder} 
                value={value}
                maxLength={maxLng} 
            /> 
            <InputValidationText validation={isValidation.validation}>
                {isValidation.reason}
            </InputValidationText>
        </>
   ) 
}

type ValidationText = {
    validation: boolean;
}

const InputComponent = styled.input`
    width: 92%;
    height: 50px;
    border-radius: 10px;
    border: 2px solid #89CFF0;
    margin-bottom: 15px;
`;

const InputValidationText = styled.span<ValidationText>`
    display: ${({  validation }) => !validation ? "block" : "none"};
    color: #660000;
`;