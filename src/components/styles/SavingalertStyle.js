import styled from "styled-components";

export const SavingalertWrapper = styled.div`
        
        position: absolute;  
        top: 0;
        height:100vh ;
        width: 100vw;
        display: flex;
        justify-content: center;
        background-color: #ffffff99;
        z-index: 9;        


        .Savingalert-container
        {
            min-height: 200px;
            width: 500px;
            background-color: white;
            box-shadow: 3px 3px  10px #505050;
            position: absolute;
            z-index: 10;
            top: 0;
            border-radius:0 0 10px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 50px;
            animation: slidinganimation .3s linear;
        }
        .Savingalert-container h1
        {
            color: #1e1e1e;
        }
        .Savingalert-container .btnsec
        {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            flex-wrap:wrap ;
            gap: 10px;
        }
        .Savingalert-container button
        {
            height: 50px;
            width: 120px;
            cursor: pointer;
            outline: none;
            border: none;
            background-color: rgb(42, 201, 164);
            color:#ffffff;
            border-radius: 5px;
            font-size: 17px;
            transition:0.2s ;
        }
        .Savingalert-container button:hover
        {
            transform: scale(1.1);
        }
        @keyframes slidinganimation {
            0%
            {
                top:-200px;
            }
            100%
            {
                top:0px;
            }
        }

        @media screen and (max-width:770px) {
            align-items: center;
            justify-content: center;
            background-color: #1e1e1ed2;

            .Savingalert-container
        {
            min-height: 200px;
            width: 500px;
            margin-left: 20px;
            margin-right:20px;
            padding-top: 40px;
            padding-bottom: 20px;
            position: relative;              
            border-radius:10px;
            gap: 120px;
        }
        .Savingalert-container h1
        {
            font-size: 20px;
        }

        .Savingalert-container button
            {
                width: fit-content;                
            }
        }
`