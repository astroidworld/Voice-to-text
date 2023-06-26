import React from 'react'
import { SavingalertWrapper } from './styles/SavingalertStyle'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Savingalert = (props) => {

    const onsave = () => {
        if (props.text === "") {            
            toast.warn('Can\'t save, No content', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                props.resetTranscript();        
                props.settext("");
                props.showalert(false);
                props.changeState(false);
                }
        else{
        props.setarr(oldArray => [...oldArray, props.text]);
        toast.success('Saved Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        props.resetTranscript();        
        props.settext("");
        props.showalert(false);
        props.changeState(false);
        }
    }

    const ondontsave = () => {
        if (props.text === "") {            
            toast.info('Nothing to Discard', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                props.resetTranscript();        
                props.settext("");
                props.showalert(false);
                props.changeState(false);
                }
        else
        {
        toast.error('Message Discarded', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        props.resetTranscript();        
        props.settext("");
        props.showalert(false);
        props.changeState(false);
        }
    }

  return (
    <>        
        <SavingalertWrapper>        
            <div className="Savingalert-container">

                <h1>Do you want to save the note?</h1>

                <div className="btnsec">
                <button onClick={onsave}>Save</button>
                <button onClick={ondontsave}>Don't Save</button>
                </div>

            </div>

        </SavingalertWrapper>
        
    </>
  )
}

export default Savingalert