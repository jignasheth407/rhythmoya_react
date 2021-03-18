import {createGlobalStyle} from 'styled-components';

// in ` this backticks we can do styling`
const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Metropolis-Light';
   }
`
export default GlobalStyle