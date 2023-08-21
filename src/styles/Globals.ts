import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.lightColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: "Open Sans", sans-serif;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  p {
    line-height: 1.625rem;
  }

  img {
    display: block;
    max-width: 100%;
  }

  svg, span {
    display: block;
  }

  input, textarea {
    display: block;
    width: 100%;
  }

  button, input, textarea {
    outline: none;
    display: inline-block;
    outline: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;

export default Globals;
