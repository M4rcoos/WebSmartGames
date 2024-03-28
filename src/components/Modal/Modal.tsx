import React, { useContext } from "react";
import {Map} from '../Map/index';
import { GlobalContext } from "../../context/GlobalContext";
import Modal from 'react-modal';
import { customStyles } from "../Games/styles/CustomStyle";
import { IGame } from "../../interfaces/Interfaces";
import * as C from "./styles"

Modal.setAppElement('#root');



interface ModalProductProps {
    game: IGame;
    selectedGameIndex: number | null | false;
    index: number;
    afterOpenModal: () => void;
    closeModal: () => void;
    handleBuy: (id: number, name: string) => void;
    modalIsOpen: boolean;
}

export const ModalProduct: React.FC<ModalProductProps> = ({
    game,
    selectedGameIndex,
    index,
    afterOpenModal,
    closeModal,
    handleBuy,
    modalIsOpen
}) => {

    return (
        <>
         <Modal
            isOpen={selectedGameIndex === index}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <C.CloseModal onClick={closeModal} >
                X
            </C.CloseModal>
            <C.ModalContainer>
                <C.ModalTitle>{game.nameGame}</C.ModalTitle>
                <C.ModalImg src={game.linkImage} />
                <C.GameDesc>{game.description}</C.GameDesc>
                
                <C.BuyModal
                    onClick={() => handleBuy(game.idGame, game.nameGame)}
                >
                    Comprar Jogo
                </C.BuyModal>
               
            </C.ModalContainer>
            {modalIsOpen ? (
                    <C.ModalMap>
                        <strong>Onde comprar:</strong>
                        <C.Localization>
                        {game.stores.map(store => (
                            <C.Content>
                             <p key={store.idStore}>{store.nameStore}</p>
                            <Map key={store.idStore} url={store.linkMap} />
                           
                            </C.Content>
                      
                        ))}
                           </C.Localization>

                    </C.ModalMap>
                ) : null}
        </Modal>
     
        </>
       
    );
};