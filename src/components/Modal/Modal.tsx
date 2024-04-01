import React, { useContext, useState } from "react";
import { Map } from '../Map/index';
import Modal from 'react-modal';
import { customStyles } from "../Games/styles/CustomStyle";
import { IGame } from "../../interfaces/Interfaces";
import QRCode from 'qrcode.react';
import QRCodeImg from '../../assets/qr code desconto.png';

import * as C from "./styles"

Modal.setAppElement('#root');

interface ModalProductProps {
    game: IGame;
    selectedGameIndex: number | null | false;
    index: number;
    afterOpenModal: () => void;
    closeModal: () => void;
    handleBuy: (id: number, idstore: number) => void;
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
    const qrCodeData = JSON.stringify(game.discount);
    const [storeSelectedIndex, setStoreSelectedIndex] = useState<number | null>(null);
    // --calculo de desconto
    function calculateDiscount(price: number, discount: number) {
        const sub = price - discount;
        return sub
    }
    //fução para comprar o jogo
    const handleBuyClick = () => {
        if (storeSelectedIndex !== null) {
            handleBuy(game.idGame, game.stores[storeSelectedIndex]?.idStore);
        } else {
            alert('Selecione uma loja antes de comprar o jogo.');
        }
    };

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
                            game.discount != 0 ? (
                                <C.ContentValue>
                                    <C.DescValue>
                                        <strong>Valor do produto: </strong><C.Value type="VALUE" >R${game.price.toFixed(2)}</C.Value>
                                    </C.DescValue>
                                    <C.DescValue>
                                        <strong>Desconto: </strong><C.Value type="DISCOUNT">- R${game.discount.toFixed(2)}</C.Value>
                                    </C.DescValue>
                                    <C.DescValue>
                                        <strong>Total: </strong><C.Value type="TOTAL">R${calculateDiscount(game.price, game.discount).toFixed(2)}</C.Value>
                                    </C.DescValue>
                                </C.ContentValue>
                            ) : (
                                <C.ContentValue>
                                    <C.DescValue>
                                        <strong>Valor do produto: </strong><C.Value type="VALUE" >R${game.price.toFixed(2)}</C.Value>
                                    </C.DescValue>
                                    <C.DescValue>
                                        <strong>Total: </strong><C.Value type="TOTAL">R${game.price.toFixed(2)}</C.Value>
                                    </C.DescValue>
                                </C.ContentValue>
                            )
                        }
                        <C.Discount>
                            <C.TextModal>Escaneie o QR pelo App e pegue o desconto!</C.TextModal>
                            <C.ModalImg src={QRCodeImg} width={500 }/>
                        </C.Discount>
                        <strong>Onde comprar:</strong>
                        <div>
                            {/* Renderize botões para selecionar cada loja */}
                            <C.TextModal>Selecione uma loja:</C.TextModal>
                            <C.SelectedStoreContent>
                                {game.stores.map((store, idx) => (
                                    <>
                                        <C.SelectedStore
                                            key={store.idStore}
                                            className={storeSelectedIndex === idx ? 'selected' : ''}
                                            onClick={() => setStoreSelectedIndex(idx)}
                                        >
                                            {store.name}
                                        </C.SelectedStore>
                                        <p style={{ textAlign: "center" }}>{store.sales_quantity}</p>
                                    </>

                                ))}
                            </C.SelectedStoreContent>
                        </div>
                        {storeSelectedIndex !== null && (
                            <>
                                {game.stores.map((store, idx) => (
                                    <C.ContentMap key={store.idStore}>
                                        {/* Renderização do mapa somente se a loja selecionada for igual à loja atual do loop */}
                                        {storeSelectedIndex === idx && (
                                            <>
                                                {store.name === "Loja união" ? (
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.826697393404!2d-46.7683829!3d-23.5387348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff41bd4fbbb3%3A0x883f18a9d028d6!2sShopping%20Uni%C3%A3o%20de%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1711814094876!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: '0' }} loading="lazy"></iframe>
                                                ) : store.name === "Loja tambóre" ? (
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.782057798545!2d-46.8343506!3d-23.5043583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1711814516335!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: '0' }} loading="lazy"></iframe>
                                                ) : (
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234317.57555845825!2d-46.98948421507731!3d-23.41670351733412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0220fcf1dc29%3A0x3b84ef70a4e234e9!2sShopping%20Iguatemi%20Alphaville!5e0!3m2!1spt-BR!2sbr!4v1711814621140!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: '0' }} loading="lazy"></iframe>
                                                )}
                                            </>
                                        )}
                                    </C.ContentMap>
                                ))}
                            </>
                        )}
                        
                          
                                <C.BuyModal
                                  onClick={handleBuyClick}
                                >
                                    Comprar Jogo
                                </C.BuyModal>
                           
                                
                        

                    </C.ContentPurchase>
                </C.ModalContainer>
            </Modal>
        </>
    );
};
