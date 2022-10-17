import styled, { css } from "styled-components";
import {Row} from "../../assets/styles";
import {ButtonContainer} from "../IconButton/IconButton";

export const Bonuses = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  
  svg {
    position: absolute;
    transition: all .3s ease;
    
    &:nth-child(2) {
      left: 26px;
    }

    &:nth-child(3) {
      left: 52px;
    }
  }
  
`;

export const Card = styled.div`
  position: relative;
  max-width: 300px;
  background-color: #FFFFFF;
  border-radius: 6px;
  overflow: hidden;
  transition: all .3s ease;

  &:hover {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 30px rgba(19, 15, 38, 0.1));
    
    ${Bonuses} {
      svg {
        &:nth-child(2) {
          left: 46px;
        }

        &:nth-child(3) {
          left: 92px;
        }
      }
    }
  }
`;

export const HeaderCard = styled.div`
  padding: 10px 15px 0 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.div`
  padding-bottom: 20px;
  width: 100%;
  height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ColorText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  
  ${props => {
  if (props.green) {
    return css`color: #2FC509`;
  }

  if (props.yellow) {
    return css`color: #F99808;`;
  }

  if (props.red) {
    return css`color: #F53B49`;
  }
}}
`;

export const Content = styled.div`
  padding: 20px 20px 26px;
  
  ${ColorText} {
    margin-bottom: 8px;
  }
`;


export const Title = styled.h4`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #1A1A25;
`;

export const Stars = styled(Row)`
  align-items: center;
  gap: 2px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #909CB5;
  
  ${Stars} {
    margin-left: 6px;
  }
`;

export const Prices = styled.div`

`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 17px;
  line-height: 135.94%;
  color: #1A1A25;
`;

export const OriginalPrice = styled(Price)`
  font-weight: 400;
  font-size: 16px;
  color: #858FA4;
  text-decoration-line: line-through;
`;

export const Footer = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled(Row)`
  gap: 8px;
  
  ${ButtonContainer} {
    .favorite, .comparison {
      rect, path {
        fill: #858FA4;
      }
    }

    &:hover {
      .favorite, .comparison {
        rect, path {
          fill: rgba(245, 59, 74, .7);
        }
      }
    }
  }
`;