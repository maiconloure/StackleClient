import styled from 'styled-components';


export const CardContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 400px;
  margin: 20px 0;
  border-radius: 4px;
  font-family: IBM Plex Sans, sans-serif;
  border: 2px solid #C0C0C0;
`

export const TopBar = styled.div`
  background: #fff;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;

  p {
    left: 20px;
    font-weight: 800;
    font-size: 1.2rem;
    margin: 0;
    margin-left: 10px;
  }
`

export const ContentBox = styled.div`

  img {
    width: 100%;
    height: 360px;
    /* height: 340px; */
    object-fit: cover;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`