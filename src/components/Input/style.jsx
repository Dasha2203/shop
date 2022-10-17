import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  background: rgba(133, 143, 164, 0.15);
  border-radius: 5px;
  
  input {
    width: 100%;
    padding: 14px 60px 14px 14px;
    background-color: transparent;
    
    border: none;
    outline: none;
    color: ${({theme}) => theme.colors.light};
    
    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.4;
      color: ${({theme}) => theme.colors.lightSecondary};
    }
  }
`;

export const InputButton = styled.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translate(0, -50%) scale(1);
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all .3s ease;
  
  &:hover {
    transform: translate(0, -50%) scale(1.1);
  }
`;