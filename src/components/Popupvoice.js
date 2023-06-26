import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import Savingalert from './Savingalert';
import { Wrapper } from './styles/MainbodyStyle';





const Popupvoice = (props) => {

    const [showalert, setshowalert] = useState(false);
    const [text, settext] = useState("");
    

    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,       
        browserSupportsSpeechRecognition,       
      } = useSpeechRecognition();

      useEffect(() => {
        settext(finalTranscript);        
      }, [interimTranscript, finalTranscript]);

    
    if (!browserSupportsSpeechRecognition) {
        return null
    }

    const stopfuntion = () =>{
        SpeechRecognition.stopListening();
        settext(finalTranscript);        
    }      

    const changeStateClose = () =>
    {
        SpeechRecognition.stopListening();
        setshowalert(true);       
    }

    if(props.state === true)
    {
        return (
            <>
            <Wrapper>

            {
                 (showalert === true) ? <Savingalert showalert={setshowalert} changeState={props.changeState} text={text} settext={settext} setarr={props.setarr} arr={props.arr} resetTranscript={resetTranscript}/> : <></>                               
            }

            <div className="blurbackground"></div>
                <div className="popup-container">
        
                <div className="container">
        
                    <AiFillCloseCircle onClick={changeStateClose} className='close-button'/>
                    
                    <h2>Speech to Text Converter</h2>
                    <br/>
                    <p>It is a tool that convert your voice to the text. you can also copy it to the clipcoard. So Try it now.</p>
        
                    <div className="main-content" onClick={() =>  setTextToCopy(transcript)} >
                        {transcript}
                    </div>
        
                    <div className="btn-style">
        
                        <button onClick={setCopied} className='btn-form'>
                            {isCopied ? 'Copied!' : 'Copy to clipboard'}
                        </button>
                        <button onClick={startListening} className='btn-form'>Start Listening</button>
                        <button onClick={stopfuntion} className='btn-form'>Stop Listening</button>
        
                    </div>
        
                </div>
        
                </div>
                </Wrapper>
            </>
          )
    }


    else
    {
        return(
            <>                       
            </>
        )
    }



  
}

export default Popupvoice