import {Logo as LogoIcon} from "../../assets/icons/index";
import styled from "styled-components";

export const Logo = () => {
  return (
    <LogoContainer>
      <a href="/#" aria-label="Go to home page">
        <LogoIcon/>
      </a>
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  
      transition: all .3s ease;

  &:hover{
    transform: scale(1.05);
  }
`;