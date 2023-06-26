import React from 'react'
import { MessageWrapper } from './styles/MessagecardStyle'


const Messagecards = (props) => {
  return (
    <>
      <MessageWrapper>
        <h1>{props.ele}</h1>
      </MessageWrapper>
    </>
  )
}

export default Messagecards