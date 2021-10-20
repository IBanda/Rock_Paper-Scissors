import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html{
  height:100%;
}
body{
  margin:0;
  font-family: 'Roboto', sans-serif;
}
body,#root{
  min-height:100vh;
}
*{
  box-sizing:border-box;
}
button{
  cursor: pointer;
}
`;

export default GlobalStyles;
