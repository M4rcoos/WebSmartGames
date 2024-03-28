import React, { useContext } from 'react';
import '../../styles/global.css';
import Modal from 'react-modal';
import { GlobalContext } from '../../context/GlobalContext';
import { Subtitle } from '../../interfaces/Interfaces';
import { customStyles } from './styles/CustomStyle';
import * as C from './styles'
import { ModalProduct } from '../Modal/Modal';

Modal.setAppElement('#root');

export const Games: React.FC = () => {
  const { input = '', games, error, setError } = useContext(GlobalContext);
  const [selectedGameIndex, setSelectedGameIndex] = React.useState<
    number | null | false
  >(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  let subtitle: Subtitle | null;
  let gameKeys = [];

  const filteredGames = games?.filter((game) =>
    game.nameGame.toLowerCase().includes(input.toLowerCase())
  );

  const afterOpenModal = () => {
    if (subtitle) subtitle.style.color = 'blue';
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedGameIndex(false);
    setIsOpen(false);
  };


  const handleBuy = (id: number, name: string) => {

    const buyAlert = error
      ? error
      : `Compra concluída com sucesso! Você comprou: ${name}
      Seu protocolo é: ${id}`;
    alert(buyAlert);
  };

  if (games && games.length > 0 && filteredGames) {
    gameKeys = Object.keys(filteredGames[0] || {});
  }

  return (
    <C.GameContainer>
      {filteredGames ? (
        filteredGames.map((game, index) => (
          <C.GameCard key={game.idGame}>
            <C.GameTitle>{game.nameGame}</C.GameTitle>
            <C.GameImg src={game.linkImage} />
            <C.Plataforms>

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
                selectedGameIndex={selectedGameIndex}
                index={index}
                afterOpenModal={afterOpenModal}
                closeModal={closeModal}
                handleBuy={handleBuy}
                modalIsOpen={modalIsOpen} />
            </div>
          </C.GameCard>
        ))
      ) : (
        <p>{error}</p>
      )}
    </C.GameContainer>
  );
};
