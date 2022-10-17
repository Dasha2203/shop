import React from 'react';
import styled from "styled-components";
import Product from "../Product/Product";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const ProductList = () => {
    return (
        <List>
            {Array.apply(null, Array(10)).map(item => (
                <Product/>
            ))}
        </List>
    );
};

export default ProductList;