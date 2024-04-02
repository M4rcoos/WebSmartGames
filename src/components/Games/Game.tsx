import React, { useContext } from 'react';
import '../../styles/global.css';
import Modal from 'react-modal';
import { GlobalContext } from '../../context/GlobalContext';
import { Subtitle } from '../../interfaces/Interfaces';
import { customStyles } from './styles/CustomStyle';
import * as C from './styles'
import { Header } from '../Header/styles';
import { ModalProduct } from '../Modal/Modal';
import { api } from '../../services/api';

Modal.setAppElement('#root');

export const Games: React.FC = () => {

  const { input = '', games, error, setError } = useContext(GlobalContext);
  const [selectedGameIndex, setSelectedGameIndex] = React.useState<
    number | null | false
  >(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);


  let gameKeys = [];

  const filteredGames = games?.filter((game) =>
    game.nameGame.toLowerCase().includes(input.toLowerCase())
  );

  

  const closeModal = () => {
    setSelectedGameIndex(false);
    setIsOpen(false);
  };


  const handleBuy = (idGame: number, idStore: number) => {
    api.put(`/games/${idGame}/${idStore}`) .then(() => {
      const titulo = "Compra Efetuada";
      const mensagem = "A sua compra foi efetuada com sucesso!";
      alert(titulo + "\n\n" + mensagem);
  })
  .catch((error) => {
      console.error("Erro ao selecionar a loja:", error); // Exibir um alerta caso ocorra um erro
  });
  };

  if (games && games.length > 0 && filteredGames) {
    gameKeys = Object.keys(filteredGames[0] || {});
  }

  return (
    <>
    <C.GameContainer>
      {filteredGames ? (
        filteredGames.map((game, index) => (
          <C.GameCard key={game.idGame}>
            <C.GameTitle>{game.nameGame}</C.GameTitle>
            <C.GameImg src={game.linkImage} />
            <C.Plataforms>
              {/* percorre a lista de plataformas e adiciona uma barra após fazer a leitura */}
              {game.platforms.map((platform, index) => (
                <C.GamePlatform key={platform.idPlatform}>
                  {index === game.platforms.length - 1 ? (
                    platform.namePlatform
                  ) : (
                    `${platform.namePlatform} / `
                  )}
                </C.GamePlatform>
              ))}
            </C.Plataforms>
            <C.GamePrice>R$ {game.price}</C.GamePrice>
            <div>
              <C.BuyBtn
                onClick={() => setSelectedGameIndex(index)}
              >
                Comprar
              </C.BuyBtn>
              <ModalProduct key={game.idGame}
                game={game} // Passando game como prop
                index={index}
                selectedGameIndex={selectedGameIndex}
               
                closeModal={closeModal}
                handleBuy={handleBuy}
               />
            </div>
          </C.GameCard>
        ))
      ) : (
        <p>{error}</p>
      )}
    </C.GameContainer>
    </>
  );
};
