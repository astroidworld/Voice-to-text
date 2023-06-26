import React from 'react'
import Popupvoice from './Popupvoice'
import HeaderBar from './HeaderBar';
import Messagecards from './Messagecards';
import {useState} from "react";
import VoiceButton from './VoiceButton';


const Mainbody = () => {



  const [arr, setarr] = useState(JSON.parse(localStorage.getItem("arr")));
  
  let string = JSON.stringify(arr)
  localStorage.setItem("arr", string)


    
    const [popup,setpopup] = useState(false);
    







  return (
    <>

        <HeaderBar></HeaderBar>

        
        <VoiceButton setpopup={setpopup} arr={arr} setarr={setarr}/>
        

        {         
          JSON.parse(localStorage.getItem("arr")).map((ele,i)=>{
            return (<Messagecards ele={ele}/>)
          })
        }
        
        <Popupvoice state={popup} changeState={setpopup} setarr={setarr} arr={arr}/>
    </>
  )
}

export default Mainbody