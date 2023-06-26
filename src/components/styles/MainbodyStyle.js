import styled from "styled-components"

export const Wrapper = styled.section `
.blurbackground{
  background-color: rgba(0, 0, 0, 0.566);    
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
}
.popup-container
{
  width: 100vw;
  min-height: 100vh;  
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  position: relative;
  padding: 40px;
  max-width: 850px; 
  min-height: 100px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: azure;
  align-items: center;
  border-radius: 10px;
  animation: popupanimation 0.2s linear;
}

@keyframes popupanimation {
  0%
  {
    transform: scale(0.8);
  }
  25%
  {
    transform: scale(0.99);
  }
  75%
  {
    transform: scale(0.96);
  }
  100%
  {
    transform: scale(1); 
  }
}

.close-button{
  position: absolute;
  font-size: 30px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: rgb(49, 49, 49);
}

.close-button:hover
{
  color: rgb(180, 0, 0);
}

h2 {
  color: rgb(43 45 56);
  text-align: center;
  font-size: 48px;
  letter-spacing: -0.2px;
  font-family: "Merriweather", serif;
}

p {
  max-width: 50rem;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 50px;
}

.main-content {
  max-width: 50rem;
  width: 100%;
  min-height: 400px;  
  padding: 18px 18px 120px 18px;
  position: relative;
  /* resize: none; */
  box-shadow: 0 12px 48px 0px rgb(109 117 141 / 20%);
  background: rgb(255 255 255);
  border: 0.5px solid rgb(231 233 245);
  border-radius: 16px;
}

.main-content:focus {
  border: 0.3px solid rgb(43, 45, 56, 0.3);
  outline: none;
}

p,
.main-content {
  font-size: 18px;
  letter-spacing: 1px;
  word-spacing: 2px;
  line-height: 1.6;
}

.btn-style {
  min-height: 10px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-form {
  /* position: absolute; */
  background: rgb(17 166 131);
  color: rgb(255 255 255);
  border-radius: 6px;
  padding: 16px 32px;
  border: none;
  font-size: 18px;
  letter-spacing: 1px;
  margin: auto;
  display: flex;
  position: relative;
  margin-top: -80px;
  cursor: pointer;
}

button:focus,
button:hover {
  background: rgb(42, 201, 164);
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.1);
}

.counter-container {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .container {
    margin-top: 20px;
  }

  h2 {
    font-size: 28px;
  }

  p {
    font-size: 16px;
    word-spacing: normal;
    margin-bottom: 40px;
    margin-top: 15px;
  }

  .main-content {
    /*border:1px solid*/
    font-size: 16px;
    word-spacing: normal;
  }

  button {
    padding: 12px 28px;
    font-size: 16px;
    margin-top: -70px;
  }

  .counter-container {
    flex-direction: column;
  }

  .counter-container p:first-child {
    margin-bottom: 0;
  }
}


`