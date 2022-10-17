import styled from "styled-components";
import React from 'react';

export const NavigationContainer = styled.div`
  display: flex;
`;

const NavigationLink = styled.a`
  padding: 12px 14px 13px;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  transition: all .3s ease;
  
  &:hover {
    color: #F53B49;
  }
`;

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLink href="#">Бренды</NavigationLink>
      <NavigationLink href="#">Сервис</NavigationLink>
      <NavigationLink href="#">Услуги</NavigationLink>
      <NavigationLink href="#">Поддержка</NavigationLink>
      <NavigationLink href="#">О компании</NavigationLink>
      <NavigationLink href="#">Блог</NavigationLink>
      <NavigationLink href="#">Где купить</NavigationLink>
      <NavigationLink href="#">О компании</NavigationLink>
    </NavigationContainer>
  )
}