import styled from "styled-components";
import {Container, Row} from "../../assets/styles";
import {NavigationContainer} from "../Navigation/Navigation";
import {FavoritePanelContainer} from "../FavoritePanel/FavoritePanel";

export const Header = styled.div`
   background-color: #1A1A25;
`;

export const HeaderTop = styled.div`
  padding: 24px 0 20px;
  
  ${Container} {
    display: flex;
    justify-content: space-between;
  }
`;

export const TabMenu = styled.div`
  display: none;

  @media(min-width: 980px) {
    display: flex;
  }

  @media(min-width: 1430px) {
    display: none;
  }
`;

export const HeaderBottom = styled.div`
  padding: 16px 0;
  display: none;
  border-top: 1px solid rgba(133, 143, 164, 0.15);
  
  ${FavoritePanelContainer} {
    margin-left: auto;
  }
  
  ${Container} {
    display: flex;
    align-items: center;
  }
  ${NavigationContainer} {
    margin-left: 34px;
  }
  
  @media (min-width: 1430px) {
    display: block;
  }
`;

export const HeaderProfile = styled(Row)`
  align-items: center;
  gap: 14px;
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: #FFFFFF;
  }
`;

export const HeaderSection = styled(Row)`
  position: relative;
  
  button:not(:last-child) {
    margin-right: 50px;
  }


  button:last-child {
    margin-right: 31.07px;
  }
  
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: calc(100% - 9px);
    width: 1.07px;
    background: rgba(133, 143, 164, 0.15);
    border-radius: 1px
  }
  
`