import { FC } from "react"
import styled from "styled-components"

interface InputInterface {
    phText: string;
    setValue: (value: string) => void;
    value: string;
}

export const Input: FC<InputInterface> = ({
    phText,
    setValue,
    value,
}) => {
   const onChangeHolder = (e: any) => {
       const value = e.target.value;
       setValue(value);
   }
 
   return (
     <InputComponent 
        placeholder={phText} 
        onChange={onChangeHolder} 
        value={value} 
      /> 
   ) 
}

const InputComponent = styled.input`
    width: 92%;
    height: 50px;
    border-radius: 10px;
    border: 2px solid #87CEEB;
`;
