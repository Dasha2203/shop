import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  max-width: 210px;
  background-color: ${({theme}) => theme.colors.light};
  border-radius: 6px;
  overflow: hidden;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 30px rgba(19, 15, 38, 0.1));
  }
`;