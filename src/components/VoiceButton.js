import React from 'react'
import { VoiceOneWrapper, VoiceTwoWrapper } from './styles/Voicebuttonstyle';
import { AiFillPlusCircle, AiOutlineClear } from 'react-icons/ai';
import {toast } from 'react-toastify';

const VoiceButton = (props) => {

    const showPopup = () => {
        props.setpopup(true);
            
    }
    const showPopup2 = () => {
        props.setarr([]); 
        toast('🧹 All Cleared!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }


    if (props.arr.length === 0) {
        return (
            <>
            <VoiceOneWrapper>
                <div className="btncontainer">
                    <h1>Create New</h1>
                    <AiFillPlusCircle onClick={showPopup} className='voice1'></AiFillPlusCircle>
                </div>
            </VoiceOneWrapper>
            </>
          )
        }
    else{
        return (
            <>
            <VoiceTwoWrapper>
            <div className="create" onClick={showPopup} >
                <h2>Create</h2>
                <AiFillPlusCircle className='voice1'></AiFillPlusCircle>
                </div>

                <div className="create" onClick={showPopup2} >
                <h2>Clear all</h2>
                <AiOutlineClear onClick={showPopup2} className='clear'></AiOutlineClear>
                </div>
                
            </VoiceTwoWrapper>
            </>
        )
    }

}

export default VoiceButton