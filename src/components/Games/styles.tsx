import styled from "styled-components";

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  animation: toLeft 0.3s forwards;
  transform: translate(-2000px);
`
export const GameCard = styled.div`
  width: 250px;
  text-align: start;
  margin-top: 64px;
  margin-bottom: 64px;
  opacity: 0;
  animation: appear 1s forwards;
`
export const GameTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const GameImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 4px;
`
export const GamePlatform = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 24px;
  margin-top: 8px;
  margin-bottom: 4px;
  margin-right:3px;
`
export const GamePrice = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-top: 4px;
`
export const BuyBtn = styled.button`
  width: 250px;
  height: 42px;
  background-color: transparent;
  border: 2px solid #F1843E;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  color: #F1843E;
  transition: background-color 0.5s ease, color 0.5s ease;
  
  &:hover{
    background-color: #ED663C;
  color: white;
  }
  &:active {
  background-color: #ED663C;
}
`

export const Plataforms = styled.div`
width: 100%;
    display: flex;
`