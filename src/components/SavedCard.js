import React from 'react'
import Messagecards from './Messagecards';
import { SavedCardWrapper } from './styles/SavedCardStyle';


const SavedCard = (props) => {
  return (
    <>     
    <SavedCardWrapper>  
        {         
            props.arr.map((ele,i)=>{
            return (<Messagecards ele={ele}/>)
            })
        }
    </SavedCardWrapper>
      </>
  )
}

export default SavedCard