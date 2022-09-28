import styled from "styled-components";

export const Instrucoes = styled.div`
  position: relative;

  @media (min-width: 920px) {
    margin-top: 267px;
  }
`;

export const Card = styled.div`
  max-width: 995px;
  height: 440px;
  margin-bottom: 44px;
  background: #FFFFFF;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  position: relative;
  margin-left: 0px;

  @media (min-width: 920px) {
    margin-top: 228px;
    margin-left: 117px;

    &:after {
      content: "";
      display: block;
      width: 606px;
      height: 809px;
      background-image: url("/images/minha_planta.png");
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      pointer-events: none;
    }
  }

  div {
    position: absolute;
    display: block;
    width: 399px;
    height: 809px;
    top: 0;
    right: 0;
    text-align: left;
    padding: 58px 81px 43px 21px;

    h2 {
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
      margin-bottom: 12px;
      opacity: .5;
    }
  
    h1 {
      font-family: Elsie Swash Caps;
      font-size: 50px;
      font-style: normal;
      font-weight: bold;
      line-height: 48px;
      letter-spacing: 0em;
      margin-bottom: 32px;
      @media (min-width: 920px) {
        font-size: 42px;
      }
    }

    p {
      font-weight: 400;
      font-size: 22px;
      line-height: 27px;
      color: rgba(32, 32, 32, .5);
      position: relative;
      height: 52px;
      margin-bottom: 32px;
      padding-left: 68px;
      padding-top: 10px;

      &:before {
        content: "";
        display: block;
        padding: 52px;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url('images/svg/list.svg');
        background-repeat: no-repeat;
      }
    }
  }
`;
