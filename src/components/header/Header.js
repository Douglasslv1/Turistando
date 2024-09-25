import React from "react";
import Style from "../header/Style.header.css";
import Carneiros from "../img/carneiros.jpg";
import Porto from "../img/porto.jpg";
import Noronha from "../img/praia2.jpg";
import Enseada from "../img/enseada-dos-corais.jpg";
import { BEACHS_NE } from "../../constants";

const Container = () => {
  return (
    <div className={Style.container}>
      <div className="card">
        <img src={Porto} alt="" />
        <div className="card-content">
          <h1 className="card-title">{BEACHS_NE.PORTO_DE_GALINHAS.NAME}</h1>
          <p className="card-description">
            {BEACHS_NE.PORTO_DE_GALINHAS.DESCRIPTION}
          </p>
          <button class="botao">Saiba Mais</button>
        </div>
        <div className="buton"></div>
      </div>
      <div className="card">
        <img src={Noronha} alt="" />
        <div className="card-content">
          <h1 className="card-title">{BEACHS_NE.FERNANDO_DE_NORONHA.NAME}</h1>
          <p className="card-description">
            {BEACHS_NE.FERNANDO_DE_NORONHA.DESCRIPTION}
          </p>
          <button class="botao">Saiba Mais</button>
        </div>
      </div>
      <div className="card">
        <img src={Carneiros} alt="" />
        <div className="card-content">
          <h1 className="card-title">{BEACHS_NE.PRAIA_DOS_CARNEIROS.NAME}</h1>
          <p className="card-description">
            {BEACHS_NE.PRAIA_DOS_CARNEIROS.DESCRIPTION}
          </p>
          <button class="botao">Saiba Mais</button>
        </div>
      </div>
      <div className="card">
        <img src={Enseada} alt="" />
        <div className="card-content">
          <h1 className="card-title">{BEACHS_NE.ENSEADA_DOS_CORAIS.NAME}</h1>
          <p className="card-description">
            {BEACHS_NE.ENSEADA_DOS_CORAIS.DESCRIPTION}
          </p>
          <button class="botao">Saiba Mais</button>
        </div>
      </div>
      <div className="card">
        <img src={Carneiros} alt="" />
        <div className="card-content">
          <h1 className="card-title">{BEACHS_NE.PRAIA_DOS_CARNEIROS.NAME}</h1>
          <p className="card-description">
            {BEACHS_NE.PRAIA_DOS_CARNEIROS.DESCRIPTION}
          </p>
          <button class="botao">Saiba Mais</button>
        </div>
      </div>
      <div className="card">
        <img src={Carneiros} alt="" />
        <div className="card-content">
          <h1 className="card-title">{BEACHS_NE.PRAIA_DOS_CARNEIROS.NAME}</h1>
          <p className="card-description">
            {BEACHS_NE.PRAIA_DOS_CARNEIROS.DESCRIPTION}
          </p>
          <button class="botao">Saiba Mais</button>
        </div>
      </div>
      <div className="card">
        <img src={Carneiros} alt="" />
        <div className="card-content">
          <h1 className="card-title">{BEACHS_NE.PRAIA_DOS_CARNEIROS.NAME}</h1>
          <p className="card-description">
            {BEACHS_NE.PRAIA_DOS_CARNEIROS.DESCRIPTION}
          </p>
          <button class="botao">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
};

export default Container;
