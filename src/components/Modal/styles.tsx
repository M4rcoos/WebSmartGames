import styled from 'styled-components'

export const CloseModal = styled.button`
 padding: 5px;
  font-weight: 700;
  border: 1px solid gray;
  color: gray;
  background-color: transparent;
  justify-self: end;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  border-radius: 4px;
  cursor: pointer;
  grid-area: 1 / 1;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover{
background-color: gray;
  color: white;
  }
  `
export const BuyModal = styled.button`
 width: 260px;
  height: 64px;
  background-color: #ED663C;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 30px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  grid-area: 5 / 1;
  margin-left: 10px;
  justify-self: start;
  transition: background-color 0.5s ease, color 0.5s ease, width 0.5s ease;
  &:hover{
  width: 320px;
  background-color: transparent;
  border: 2px solid #ED663C;
  color: #ED663C; 
  }

  @media screen and (max-width: 900px) {
    align-self: center !important;
  }
`
export const ModalContainer = styled.div`
 display: grid;
  justify-items: center;
  grid-template-columns: auto-fill 1fr;

  @media screen and (max-width: 900px) {
    display: flex !important;
    flex-direction: column !important;
    align-content: center !important;
  }
`
export const ModalTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  grid-area: 2 / 1;
  @media screen and (max-width: 900px) {
    align-self: center !important;
  }
`
export const ModalImg = styled.img`
  border-radius: 12px;
  padding: 5px;
  grid-area: 2 / 2 / 4 / 2;
  align-self: center;
  justify-self: center;
  height: 340px;
  max-width: 400px;
  @media screen and (max-width: 900px) {
    align-self: center !important;
  }
`
export const GameDesc = styled.p`
font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  width: 30vw;
  padding: 10px;
  line-height: 24px;
  grid-area: 3 / 1;
  align-self: start;
  justify-self: center;
  text-align: left;
  color: #aaa;
  font-style: italic;
  @media screen and (max-width: 900px) {
    align-self: center !important;
    width: 90vw !important;
  }
`
export const ModalMap = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  @media screen and (max-width: 900px) {
    align-self: center !important;
  }
`
export const Localization = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  
`
export const Content = styled.div`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap:8px;
    width: 100%;
`