import React, { useContext } from "react";
import { Map } from '../Map/index';
import Modal from 'react-modal';
import { customStyles } from "../Games/styles/CustomStyle";
import { IGame } from "../../interfaces/Interfaces";
import QRCode from 'qrcode.react';

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

function calculateDiscount(price: number, discount: number) {
    const sub = price - discount;
    return sub
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
    const qrCodeData = JSON.stringify(game.discount);
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
                    <C.ImgAndDescription>
                        <C.ModalTitle>{game.nameGame}</C.ModalTitle>
                        <C.ModalImg src={game.linkImage} />
                        
                        <C.GameDesc>{game.description}</C.GameDesc>

                    </C.ImgAndDescription>

                    <C.ContentPurchase>
                            {
                                game.discount != null ? (
                                    <C.ContentValue>
                                      <C.DescValue>
                                      <strong>Valor do produto: </strong><C.Value type="VALUE" >R${game.price}</C.Value>
                                      </C.DescValue>
                                      <C.DescValue>
                                      <strong>Desconto: </strong><C.Value type="DISCOUNT">- R${game.discount}</C.Value>
                                      </C.DescValue>
                                      <C.DescValue>
                                      <strong>Total: </strong><C.Value type="TOTAL">R${calculateDiscount(game.price, game.discount)}</C.Value>
                                      </C.DescValue>
                                        
                                        
                                        
                                    </C.ContentValue>
                                ) : (
                                    <C.ContentValue>
                                        <C.DescValue>
                                      <strong>Valor do produto: </strong><C.Value type="VALUE" >R${game.price}</C.Value>
                                      </C.DescValue>
                                     
                                      <C.DescValue>
                                      <strong>Total: </strong><C.Value type="TOTAL">R${game.price}</C.Value>
                                      </C.DescValue>
                                    </C.ContentValue>)
                            }
                        <div>
                        <strong>Escaneie o QR pelo App e pegue o desconto!</strong>
                        <QRCode value={qrCodeData} />
                        </div>
                        <C.BuyModal
                            onClick={() => handleBuy(game.idGame, game.nameGame)}
                        >
                            Comprar Jogo
                        </C.BuyModal>
                    </C.ContentPurchase>




                </C.ModalContainer>
                
            </Modal>

        </>

    );
};