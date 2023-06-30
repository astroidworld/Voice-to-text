import React, { useEffect } from 'react'
import Popupvoice from './Popupvoice'
import HeaderBar from './HeaderBar';
import {useState} from "react";
import VoiceButton from './VoiceButton';
import SavedCard from './SavedCard';
import { GlobalStyle } from "./styles/Global-Style";


const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if (list) {
    return JSON.parse(list);
  }
  else
    return [];
}


const Mainbody = () => {  

  const [arr, setarr] = useState(getLocalItems());

  // useEffect for arr 
  useEffect(() => {    
  localStorage.setItem('lists',JSON.stringify(arr));
  }, [arr]);    


    const [popup,setpopup] = useState(false);

  return (
    <>
        <GlobalStyle popup={popup}/>       
        <HeaderBar></HeaderBar>

        
        <VoiceButton setpopup={setpopup} arr={arr} setarr={setarr}/>
        
        <SavedCard arr={arr}/>

        
        <Popupvoice state={popup} changeState={setpopup} setarr={setarr} arr={arr}/>
    </>
  )
}

export default Mainbody