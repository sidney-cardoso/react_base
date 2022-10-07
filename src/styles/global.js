import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        font-family: 'Work Sans', sans-serif;
        background-color: #aaafff;
    }
    html, body, #root {
        height: 100%;
    }
    button {
        border: none;
        cursor: pointer
    }
    a {
        text-decoration: none;
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
