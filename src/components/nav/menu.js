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
            <div id='divBusca>'>
              <input type="text" id="txtBusca" placeholder='Buscar'Buscar></input>
            </div>
            <a id="home" href="#">HOME</a>
            <a id="pontost" href="#">PONTOS TURÍSTICOS</a>
            <a id="contato" href="#">CONTATO</a>
            <a id="pernambuco" href="#">LITORAL</a>
        </div>
    </nav>
    </>
    
  )
}

export default menu

