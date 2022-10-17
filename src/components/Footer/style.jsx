import styled from "styled-components";
import {ButtonContainer} from "../IconButton/IconButton";
import {Buttons} from "../UI";
import {InputContainer} from "../Input/style";

export const FooterContainer = styled.div`
  padding: 88px 0 51px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const MenuTitle = styled.h4`
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: ${({theme}) => theme.colors.light};
`;

export const MenuSection = styled.div`
  width: 100%;
  max-width: 210px;
  min-width: 210px;
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MenuLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: ${({theme}) => theme.colors.lightSecondary};
  cursor: pointer;
  transition: all .3s ease;
  
  &:hover {
    color: ${({theme}) => theme.colors.light};
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  gap: 30px;
`;

export const FooterBottom = styled.div`
  position: relative;
  padding-top: 51px;
  display: flex;
  align-items: flex-start;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(133, 143, 164, 0.15);
    border-radius: 1px;
  }
  
  ${PaymentMethods} {
    margin-left: 77px;
  }
  
  ${Buttons} {
    margin-left: 148px;
  }
`;


export const RightBottomFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterTop = styled.div`
  padding-bottom: 28px;
  display: flex;
  justify-content: space-between;
`;

export const Phone = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: ${({theme}) => theme.colors.lightSecondary};
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 330px;
  
  ${InputContainer} {
    margin-bottom: 50px;
    max-width: 255px;
  }
  
  ${Phone} {
    margin-bottom: 8px;
  }
`;



export const SocialButtons = styled.div`
  display: flex;
  gap: 10px;
  
  ${ButtonContainer} {
    path {
      fill: #909CB5;
      transition: all .3s ease;
    }
    
    &:hover {
      path {
        fill: ${({theme}) => theme.colors.light};
      }
    }
  }
`;

export const CopyRight = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: ${({theme}) => theme.colors.lightSecondary};
`;

export const FooterLogo = styled.div`
  margin-right: auto;
  
  ${CopyRight} {
    margin-top: 17px;
  }
`;

