import styled from 'styled-components';

export const HomeContainer = styled.div`
  z-index: 1;
  position: relative;
  background: var(--primary-color-1);
  width: 100vw;
  min-height: 100%;
  display: grid;
  grid-template-columns: 13vw 46vw 28vw 13vw;
  grid-template-rows: 50px 4% 1fr;
  grid-template-areas: 
  "header header header header"
  ". banner banner ."
  ". post card .";
`

export const HeaderBar = styled.div`
  grid-area: header;
  position: relative;
  z-index: 999;
  top: 0;
  width: 100vw;
  height: 50px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #rightArea {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const LogoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 20px;
    width: 45px;
    height: 45px;
  }

  h1 {
    color: var(--primary-color-9);
    font-size: 1.1rem;
    font-weight: 700;
    font-family: Inter, sans-serif;
    margin: 4px;
  }
`

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  #searchIcon {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 18px;
    height: 18px;
  }
  
  input {
    background: var(--primary-color-2);
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #8C8C8C;
    border: none;
    width: 420px;
    height: 20px;
    padding: 8px 38px;
    border-radius: 4px;
    ::placeholder {
      color: #8C8C8C;
    }
  }

  #addPost {
    cursor: pointer;
  }
`

export const InfoArea = styled.div`
  margin-right: 8px;
  padding-right: 10px;
  border-right: 4px solid #8C8C8C;
  border-radius: 4px;

  img {
    width: 35px;
    cursor: pointer;
  }
`

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  
  img {
    width: 45px;
    cursor: pointer;
  }

  #userText {
      margin-top: 5px;
      margin-left: 8px;
      margin-right: 20px;
      font-family: Inter, sans-serif;

      h2 {
        font-weight: 500;
        font-size: 0.9rem;
        margin: 0;
      }

      p {
        font-weight: 400;
        font-size: 0.7rem;
        color: var(--secondary-color-5);
        margin: 0;
      }
    }

  #showMenu {
    width: 20px;
    cursor: pointer;
  }
`

export const UserMenu = styled.div`
  position: absolute;
  top: 48px;
  right: 14px;
  background: #fff;
  width: 120px;
  height: 190px;
  padding: 5px 18px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #000;
    }

    img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    }

    p {
      font-family: Inter, sans-serif;
      font-weight: 500;
      font-size: 0.7rem;
    }
  }
`

export const BannerArea = styled.div`
  grid-area: banner;
  margin-top: 10px;
  text-align: center;

  img {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const PostsArea = styled.div`
  grid-area: post;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`

export const CardsArea = styled.div`
  grid-area: card;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`

export const ChatIcon = styled.div<{ openChat: boolean }>`
  cursor: pointer;
  position: fixed;
  bottom: ${(props) => (props.openChat ? '610px' : '-4px')};
  right: ${(props) => (props.openChat ? '460px' : '100px')};
  width: 100px;
  height: 30px;
  background: #FF8C00;
  padding: 10px;
  border-radius: 4px;
  transition: 0.6s;

  :hover {
    bottom: ${(props) => (props.openChat ? '630px' : '-4px')};
    transition: 0.6s;
  }

  p {
    margin: 0;
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
}
`
