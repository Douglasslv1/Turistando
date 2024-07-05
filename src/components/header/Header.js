import React from 'react'
import Style from '../header/Style.header.css'
import Carneiros from '../img/carneiros.jpg'
import Porto from '../img/porto.jpg'
import Noronha from '../img/praia2.jpg'
import Enseada from '../img/enseada-dos-corais.jpg'


const container = () => {
  return (
    <div className={Style.container}>
        
        <div className="card">
            <img src={Porto} alt="" />
        <div className="card-content">
            <h1 className='card-title'>Porto de Galinhas</h1>
            <p className='card-description'>Porto de Galinhas é uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil. A região possui piscinas de águas claras e mornas formadas entre corais, além de estuários, mangues, areia branca e coqueirais.</p>
            <button class="botao">Saiba Mais</button>
        </div>
        <div className="buton"></div>
        </div>
        <div className="card">
            <img src={Noronha} alt="" />
        <div className="card-content">
            <h1 className='card-title'>Fernando de Noronha</h1>
            <p className='card-description'>Fernando de Noronha é um arquipélago vulcânico situado a cerca de 350 quilómetros ao largo da costa nordeste do Brasil. Tem o nome da sua maior ilha, um parque marinho e santuário ecológico protegido com uma linha costeira recortada e vários ecossistemas. É reconhecida pelas suas praias pouco urbanizadas e por atividades como mergulho e snorkeling.</p>
            <button class="botao">Saiba Mais</button>
        </div>
        </div>
        <div className="card">
            <img src={Carneiros} alt="" />
        <div className="card-content">
            <h1 className='card-title'>Praia dos Carneiros</h1>
            <p className='card-description'>A Praia dos Carneiros, em Pernambuco, é reconhecida como uma das praias mais bonitas do Brasil e desperta o interesse de muitos viajantes por sua beleza natural. É o lugar perfeito para relaxar e curtir um cenário paradisíaco, cercado por um mar lindo, cheio de piscinas naturais. Estivemos em Carneiros recentemente, por isso vale conferir nossas dicas fresquinhas!</p>
            <button class="botao">Saiba Mais</button>
        </div>
        </div>
        <div className="card">
            <img src={Enseada} alt="" />
        <div className="card-content">
            <h1 className='card-title'>Enseada dos Corais</h1>
            <p className='card-description'>A Praia dos Carneiros, em Pernambuco, é reconhecida como uma das praias mais bonitas do Brasil e desperta o interesse de muitos viajantes por sua beleza natural. É o lugar perfeito para relaxar e curtir um cenário paradisíaco, cercado por um mar lindo, cheio de piscinas naturais. Estivemos em Carneiros recentemente, por isso vale conferir nossas dicas fresquinhas!</p>
            <button class="botao">Saiba Mais</button>
        </div>
        </div>
        <div className="card">
            <img src={Carneiros} alt="" />
        <div className="card-content">
            <h1 className='card-title'>Praia dos Carneiros</h1>
            <p className='card-description'>A Praia dos Carneiros, em Pernambuco, é reconhecida como uma das praias mais bonitas do Brasil e desperta o interesse de muitos viajantes por sua beleza natural. É o lugar perfeito para relaxar e curtir um cenário paradisíaco, cercado por um mar lindo, cheio de piscinas naturais. Estivemos em Carneiros recentemente, por isso vale conferir nossas dicas fresquinhas!</p>
            <button class="botao">Saiba Mais</button>
        </div>
        </div>
        <div className="card">
            <img src={Carneiros} alt="" />
        <div className="card-content">
            <h1 className='card-title'>Praia dos Carneiros</h1>
            <p className='card-description'>A Praia dos Carneiros, em Pernambuco, é reconhecida como uma das praias mais bonitas do Brasil e desperta o interesse de muitos viajantes por sua beleza natural. É o lugar perfeito para relaxar e curtir um cenário paradisíaco, cercado por um mar lindo, cheio de piscinas naturais. Estivemos em Carneiros recentemente, por isso vale conferir nossas dicas fresquinhas!</p>
            <button class="botao">Saiba Mais</button>
        </div>
        </div>
        <div className="card">
            <img src={Carneiros} alt="" />
        <div className="card-content">
            <h1 className='card-title'>Praia dos Carneiros</h1>
            <p className='card-description'>A Praia dos Carneiros, em Pernambuco, é reconhecida como uma das praias mais bonitas do Brasil e desperta o interesse de muitos viajantes por sua beleza natural. É o lugar perfeito para relaxar e curtir um cenário paradisíaco, cercado por um mar lindo, cheio de piscinas naturais. Estivemos em Carneiros recentemente, por isso vale conferir nossas dicas fresquinhas!</p>
            <button class="botao">Saiba Mais</button>
        </div>
        </div>
        
    </div>
    


  )
}

export default container
