import React from 'react'
import { HeaderWrapper } from './styles/HeaderStyle'


const HeaderBar = () => {
  return (
    <>
      <HeaderWrapper>
        <div className="header">
          <img src="./img/logo.png" alt="logo" className='logo'/>
            
        </div>
      </HeaderWrapper>
    </>
  )
}

export default HeaderBar