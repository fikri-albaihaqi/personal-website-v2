import { createGlobalStyle } from "styled-components"
import theme from "./theme"
const { colors, fonts, fontSizes } = theme

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }

  body {
    min-height: 100%;
    overflow-x: hidden;
    font-size: ${fontSizes.base};
    background-color: ${colors.black};
    color: white;
  }

  #root {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${fonts.primary};
  }

  p, a, table, span {
    font-family: ${fonts.secondary};
  }

  p {
    line-height: 1.3;
  }
`

export default GlobalStyle