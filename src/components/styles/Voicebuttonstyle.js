import styled from "styled-components"

export const VoiceOneWrapper = styled.div `
            max-width: 1200px; 
            margin-left:auto;
            margin-right: auto;
            height: calc(100vh - 150px);
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
            max-width: 850px;           
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px 50px 30px 50px;
            gap: 50px;
            flex-wrap: wrap;
            flex-direction: column;
            background-color: #ffffff;
            border: 3px solid rgb(42, 201, 164);
            border-radius: 20px;
            margin: 20px auto 0 auto;

            .text h2 {
            color: rgb(43 45 56);
            text-align: center;
            font-size: 48px;
            letter-spacing: -0.2px;
            font-family: "Merriweather", serif;
            }

            .text p {
            max-width: 50rem;
            text-align: center;
            margin-top: 15px;  
            font-size:20px;
            }

            .text
            {
                max-width: 850px;                
            }
            .btn-section
            {
            max-width: 100%;           
            display: flex;
            justify-content: center;
            align-items: center;
            /* padding: 30px; */
            gap: 50px;
            flex-wrap: wrap;
            }
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

            @media screen and (max-width: 420px){
                gap: 20px;
                h2
                {
                    font-size: 20px;
                }
            }
`