import React from 'react'
import Logo from '../img/LOGO.png'
import style from './style.module.css'


const menu = () => {
  return (
    <>
    <nav>
        <div className={style.menu}>
            <div className={style.logo}>
              <img src={Logo} alt="Logo Turistando"/>
            </div>
            <div className={style.divBusca}>
              <input type="text" className={style.txtBusca} placeholder='Buscar'></input>
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

