import React from 'react';
import {Content, Title} from "./style";

const Section = ({title, children}) => {
    return (
        <>
            <Title>{title}</Title>
            <Content>
                {children}
            </Content>
        </>
    );
};

export default Section;