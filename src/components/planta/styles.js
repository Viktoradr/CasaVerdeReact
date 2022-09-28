import styled from "styled-components";

export const CardPlanta = styled.div`
  width: 379px;
  height: 200px;
  background-color: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  position: relative;
  margin-bottom: 30px;

  div {
    padding-top: 27px;
    padding-bottom: 27px;
    padding-right: 36px;
    padding-left: 204px;
    z-index: 1;

    h5 {
      font-size: 16px;
      line-height: 20px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      margin-bottom: 24px;
      color: rgba(32, 32, 32, 0.5);
      text-align: left;
    }

    h3 {
      font-family: Elsie Swash Caps;
      font-weight: 900;
      font-size: 32px;
      line-height: 37px;
      text-align: left;
      margin-bottom: 8px;
      color: #202020;
    }

    a {
      text-decoration: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #ffcb47;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
