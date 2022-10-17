import styled from "styled-components";


export const IconButton = ({children, count}) => {
  return (
    <ButtonContainer>
      {children}
      {count && <ButtonCounter>{count}</ButtonCounter>}
    </ButtonContainer>
  )
}

export const ButtonCounter = styled.div`
  position: absolute;
  top: -6px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  min-height: 16px;
  background: #F53B49;
  border: 2px solid #1A1A25;
  border-radius: 50%;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #fff;
`;

export const ButtonContainer = styled.button`
  //padding: 12px 20px 13px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  .favorite, .comparison {
    rect, path {
      fill: rgba(255, 255, 255, .7);
      transition: all .3s ease;
    }
  }

  .cart {
    path {
      stroke: rgba(255, 255, 255, .7);
      fill: none;
    }
  }
  
  
  
  &:hover {
    .favorite, .comparison {
      rect, path {
        fill: rgba(245, 59, 74, .7);
      }

      
    }

    .cart {
      path {
        stroke: rgba(245, 59, 74, .7);
      }
    }
    
    .avatar {
      path {
        fill: #000;
      }
    }
  }
  
`