import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor } from "../config/colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        font-family: 'Work Sans', sans-serif;
        background-color: ${primaryDarkColor};
        color: ${primaryColor}
    }
    html, body, #root {
        height: 100%;
    }
    button {
        border: none;
        cursor: pointer;
        background: ${primaryColor};
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 700;
    }
    a {
        text-decoration: none;
        color: ${primaryColor};

    }
    ul {
        list-style: none;
    }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
