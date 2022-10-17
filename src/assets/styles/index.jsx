import styled, {css} from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
  max-width: 300px;

  @media(min-width: 980px) {
    max-width: 960px;
  }
  
  @media(min-width: 1430px) {
    max-width: 1410px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;