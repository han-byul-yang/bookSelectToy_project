import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const Globalstyles = createGlobalStyle`
${reset};
a{
    text-decoration: none;
    color: inherit;
}
*{
    box-sizing: border-box;
}
body{
    color: black;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    font-family: 'CookieRun-Regular';
}`

export default Globalstyles