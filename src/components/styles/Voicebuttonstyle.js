import styled from "styled-components"

export const VoiceOneWrapper = styled.div `
            max-width: 850px;
            margin-left:auto;
            margin-right: auto;
            margin-top: 20px;
            min-height: 450px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background-color: #ffffff;
            border: 3px solid rgb(42, 201, 164);
            border-radius: 20px;
            gap: 50px;
            padding: 50px;


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

            .btncontainer
            {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: #171717;
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
            @media screen and (max-width: 865px){
                margin: 20px;
                padding: 10px;
                .text h2
                {
                    font-size: 35px;
                }
                .voice1
                {
                height: 70px;
                width: 70px; 
                }
                .text p {
                margin-top: 10px;
                }
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