import React from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import '../../styles/global.css';
import game from '../../assets/games.jpg';
import logo from '../../assets/logo.png';

import * as C from './styles'

//component header
export const Header: React.FC = () => {
  
  //usando meu contexto global
  const { input = '', setInput } = React.useContext(GlobalContext);

  return (
    <>
      <C.Header>
        <img src={logo} alt="logo smart games" width={300}/>
        <C.Search
          className="search"
          type="text"
          placeholder="Pesquise aqui..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </C.Header>
      <C.ImgSlide src={game} alt="fifa" className="bigImg" />
    </>
  );
};
