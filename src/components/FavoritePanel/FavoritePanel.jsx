import React from "react";
import { Row } from "../../assets/styles";
import { IconButton } from "../IconButton/IconButton";
import { Cart, Comparison, Favorite } from "../../assets/icons";
import styled from "styled-components";

export const FavoritePanel = ({ data }) => {
  return (
    <FavoritePanelContainer>
      <IconButton count={data.comparison}>
        <Comparison/>
      </IconButton>
      <IconButton count={data.favorite}>
        <Favorite/>
      </IconButton>
      <IconButton count={data.cart}>
        <Cart/>
      </IconButton>
    </FavoritePanelContainer>
  )
}

export const FavoritePanelContainer = styled(Row)`
  gap: 50px;
`;