import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: #000;
  display: flex;
  padding:10px;
  justify-content: space-around;
  align-items: center;
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5));
`
export const Search = styled.input`
    width: 600px;
  height: 36px;
  border-radius: 4px;
  text-align: center;
  background-color: #d9d9d9;
  border: none;

  &:focus {
    background-color: #b2b2b2;
    outline: 3px solid #F1843E;
    color: #ED663C;
  }

  &::placeholder {
    color: #ED663C; 
  }

    @media screen and (max-width: 1100px) {
    display: none;
  }

`
export const ImgSlide = styled.img`
    height: 60vh;
  object-fit: fill;
  width: 100vw;
  max-width: 100%;
  opacity: 0;
  animation: appear 1s forwards;
`