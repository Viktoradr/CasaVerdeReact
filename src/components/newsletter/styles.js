import styled from "styled-components";

export const Newsletter = styled.div`
  background-color: #ffe29a;
  padding: 16px;
  margin-top: 16px;
  position: relative;

  @media (min-width: 920px) {
    background-color: transparent;
    margin-top: 155px;

    &:after {
      content: "";
      display: block;
      width: 787px;
      height: 975px;
      background-image: url("/images/hero-image.png");
      position: absolute;
      --baseDistance: -287px;
      top: calc(var(--baseDistance) + 50px);
      right: 85px;
      z-index: -1;
      pointer-events: none;
    }
  }
`;

export const Container = styled.div`
  max-width: 585px;
`;

export const ContainerText = styled.div`
  max-width: 481px;
  margin-bottom: 32px;

  h2 {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 12px;
    opacity: .5;
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
`;

export const Form = styled.form`
  input[type="email"] {
    padding: 27px;
    padding-left: 55px;
  }

  .fieldGroup {
    display: flex;
    flex-direction: column;
    @media (min-width: 920px) {
      flex-direction: row;
    }

    input {
      flex: 1;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      font-family: "Montserrat";
      background-image: url("images/svg/mail.svg");
      background-repeat: no-repeat;
      background-position: 16px center;
      outline-color: #ffcb47;
      box-shadow: 10px 10px 30px 0px #0000000f;
      border: 0;
      height: 75px;
      /* border: 1px solid #ffa100; */

      &:hover {
        box-shadow: 10px 10px 30px 0px #0000002e;
      }
    }

    button {
      height: 75px;
      width: 194px;
      left: 751px;
      top: 597px;
      border-radius: 0px;
      color: #fff;
      font-size: 16px;
      width: 100%;
      background-color: #ffcb47;
      font-family: "Montserrat";
      padding: 27px;
      box-shadow: 10px 10px 30px 0px #ffcb474d;
      border: 0;
      /* border: 1px solid #ffa100; */

      @media (min-width: 920px) {
        width: initial;
      }
    }
  }
`;

export const Error = styled.span`
  color: red;
  padding: 2px;
`;
