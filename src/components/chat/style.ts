import styled from 'styled-components';
import StripesBackground from '../../assets/images/Vanishing-Stripes.svg'

export const ChatBox = styled.div`
    position: fixed;
    bottom: 0px;
    right: 14px;
    background: #ADD8E6;
    background-image: url(${StripesBackground});
    background-size: 500px;
    padding: 10px;
    border-radius: 2px;
`

export const Chat = styled.div`
  transition: 0.7s;
  position: fixed;
  bottom: 5px;
  right: 100px;
  width: 500px;
`

export const ChatContainer = styled.div`
  background: #87CEFA;
  padding: 0 30px;
  height: 80%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 10px 5px;
  box-shadow: 1px 1px 16px 2px rgba(0, 0, 0,0.3);
  display: flex;
  flex-direction: column;
  background-image: url(${StripesBackground});
  background-size: 500px;

  h2 {
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
    font-size: 1.6rem;
    margin-top: 0;
    margin-bottom: 4px;
    margin-left: 8px;
  }


  p { 
    color: #fff;
    margin: 0;
    font-size: 0.9rem;
  }

  ul {
    margin: 10px;
    padding: 0;
    height: 500px;
    overflow-y: scroll;
  }

  ul li {
  display: block;
  margin-bottom: 5px;

 }

  p {
    font-family: 'IBM Plex Sans', sans-serif;
    border-radius: 100px / 50px;
    padding: 1px 10px;
    margin: 0;
    font-weight: 400;
  }

  .author {
    font-family: 'Inter', sans-serif;
    color: #836FFF	;
    display: inline-block;
    text-align: center;
    margin: 0 2%;
    font-weight: 600;
    font-size: 14px;
    }

    .me {
    text-align: right;
    margin-right: 20px;
    .author {
      color: #FFFF00;
    }
  }
`

export const MessageForm = styled.div`
  form {
    display: flex;
  }

    input {
        font-family: 'IBM Plex Sans', sans-serif;
        color: #7e99a0;
        font-size: 1rem;
        font-weight: 300;
        line-height: 19px;
        padding: 5px;
        box-sizing: border-box;
        display: inline-block;
        width: 80%;
        height: 35px;
        outline: none;
        border: none;
    }

    button {
      cursor: pointer;
      font-family: 'IBM Plex Sans', sans-serif;
      color: #fff;
      font-size: 1.2rem;
      font-weight: 600;
      width: 20%;
      height: 35px;
      border: none;
      background: #191970	;
    }
`