import React from 'react'
import Logo from '../img/LOGO.png'
import Style from './Style.menu.css'


const menu = () => {
  return (
    <>
    <nav className={Style.nenu}>
        
        <div className='menu'>
          <div className='logo'>
            <img src={Logo} alt="" />
          </div>
          <br/>
            <a id="home" href="#">Home</a>
            <a id="pontost" href="#">Pontos Turísticos</a>
            <a id="contato" href="#">Contato</a>
            <a id="pernambuco" href="#">Conheça o litoral</a>
        </div>
    </nav>
    </>
  )
}

export default menu

