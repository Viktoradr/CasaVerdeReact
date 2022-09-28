import styled from "styled-components";

export const NotFoundWarning = styled.div`
  padding: 16px;
  margin-top: 16px;
  position: relative;

  @media (min-width: 920px) {
    background-color: transparent;
    margin-top: 155px;
  }

  div {
    max-width: 585px;

    h2 {
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 12px;
      opacity: 0.5;
    }

    h1 {
      font-family: Elsie Swash Caps;
      font-size: 50px;
      font-style: normal;
      font-weight: 900;
      line-height: 1;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 24px;
      @media (min-width: 920px) {
        font-size: 82px;
      }
    }

    p {
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 16px;
    }
  }
`;
