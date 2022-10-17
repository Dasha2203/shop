import React from 'react';
import {InputButton, InputContainer} from "./style";

const Input = ({placholder, icon}) => {
    return (
        <InputContainer>
            <input placeholder={placholder}/>
            <InputButton>{icon}</InputButton>
        </InputContainer>
    );
};

export default Input;