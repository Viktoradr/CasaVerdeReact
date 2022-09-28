import styled from "styled-components";

export const Produtos = styled.div`
    max-width: 1200px;
    margin-bottom: 153px;

    @media (min-width: 920px) {
      margin-top: 44px;
    }

    > h2 {
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 12px;
      opacity: .5;
      text-align: center;
    }
  
    > h1 {
      font-family: Elsie Swash Caps;
      font-size: 50px;
      font-style: normal;
      font-weight: 900;
      line-height: 1;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 24px;
      text-align: center;
      @media (min-width: 920px) {
        font-size: 82px;
      }
    }

    .MuiTypography-h5 {
      line-height: 20px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
    }
`;
