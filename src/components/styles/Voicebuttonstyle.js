import styled from "styled-components"

export const VoiceOneWrapper = styled.div `
            width: 100vw;           
            height: calc(100vh - 70px);
            display: flex;
            justify-content: center;
            align-items: center;

            .btncontainer
            {
                height: 300px;
                width: 500px;
                background-color: #ffffff;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: #171717;
                border: 3px solid rgb(42, 201, 164);
                gap: 20px;
            }

            .voice1
            {
                height: 100px;
                width: 100px;
                cursor: pointer;
                color:rgb(42, 201, 164);                
                transition: 0.5s;
            }
            .voice1:hover
            {
                transform: scale(1.1);
            }

`

export const VoiceTwoWrapper = styled.div `
            width: 100vw;           
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px;
            gap: 50px;
            .create{
                height: 70px;
                width: 150px;
                background-color: #ffffff;
                border: 3px solid rgb(42, 201, 164);
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                color: #171717;
                border-radius: 10px;
                transition: 0.5s;
                cursor: pointer;
            }
            .create:hover
            {
                transform: scale(1.05);
            }
            .voice1,.clear
            {
                height: 25px;
                width: 25px;
                color:rgb(42, 201, 164); 
            }
`