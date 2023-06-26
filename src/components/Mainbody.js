import React, { useEffect } from 'react'
import Popupvoice from './Popupvoice'
import HeaderBar from './HeaderBar';
import Messagecards from './Messagecards';
import {useState} from "react";
import VoiceButton from './VoiceButton';

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if (list) {
    return JSON.parse(list);
  }
  else
    return [];
}


const Mainbody = () => {

  // JSON.parse(localStorage.getItem("arr"))

  const [arr, setarr] = useState(getLocalItems());

  useEffect(() => {    
  localStorage.setItem('lists',JSON.stringify(arr));

  }, [arr])
  
  
  // let string = JSON.stringify(arr)
  // localStorage.setItem("arr", string)


    
    const [popup,setpopup] = useState(false);
    







  return (
    <>

        <HeaderBar></HeaderBar>

        
        <VoiceButton setpopup={setpopup} arr={arr} setarr={setarr}/>
        

        {         
          arr.map((ele,i)=>{
            return (<Messagecards ele={ele}/>)
          })
        }
        
        <Popupvoice state={popup} changeState={setpopup} setarr={setarr} arr={arr}/>
    </>
  )
}

export default Mainbody