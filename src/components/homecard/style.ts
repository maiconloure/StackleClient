import styled from 'styled-components';


export const HomeCardContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 300px;
  margin: 20px 0;
  border-radius: 4px;
  font-family: IBM Plex Sans, sans-serif;
`

export const TopCard = styled.div`
  position: relative;

  p {
    position: absolute;
    left: 20px;
    color: #fff;
    font-weight: 800;
    font-size: 1.4rem;
  }

  img {
    width: 100%;
    height: 74px;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`

export const CardContent = styled.div`
  position: relative;
  padding: 10px 20px;
  text-align: center;
  p {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 10px;
  }

  img {
    position: absolute;
    left: 30px;
    width: 120px;
  }
`

export const HomeBtn = styled.button`
  width: 180px;
  height: 42px;
  background: var(--primary-color-8);
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
`