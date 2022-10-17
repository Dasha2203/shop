import styled, {css} from "styled-components";
import {flexCenter} from "../../assets/styles";

const buttonFont = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const Button = styled.button`
  padding: 12px 20px 13px;
  ${flexCenter};
  ${buttonFont};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
  
  svg, img {
    margin-right: 6px;
  }
`;

export const PrimaryButton = styled(Button)`
  color: ${({theme}) => theme.colors.light};
  background-color: ${({theme}) => theme.colors.primary};

  &:hover {
    background-color: ${({theme}) => theme.colors.primaryDark};
  }
`;

export const SecondaryButton = styled(Button)`
  color: ${({theme}) => theme.colors.light};
  background-color: ${({theme}) => theme.colors.gray};

  &:hover {
    background-color: ${({theme}) => theme.colors.lightSecondary};
  }
`;

export const SecondaryBorderButton = styled(Button)`
  color: ${({theme}) => theme.colors.lightSecondary};
  background-color: transparent;
  border: 1px solid rgba(144, 156, 181, 0.5);

  &:hover {
    color: ${({theme}) => theme.colors.light};
    background-color: ${({theme}) => theme.colors.gray};
  }
`;