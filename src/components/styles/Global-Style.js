import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `

${'' /* imported font  */}
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Lato&family=Libre+Baskerville&family=Merriweather:wght@700&family=Work+Sans&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}



html {
  color: rgb(96 101 123);
}
body{
  background-color: rgb(206, 255, 244);
}
html, body {   
  overflow: ${(props) => {
    return props.popup === true?'hidden':'none'
  }
  };
  }
`