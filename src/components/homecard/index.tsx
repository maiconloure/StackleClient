import React from 'react';
import { HomeCardContainer, TopCard, CardContent, HomeBtn } from './style';
import homeGif from '../../assets/images/home.gif';
import AstronautImg from '../../assets/images/Astronaut.png';

export const HomeCard = ({func}:any) => {
  return (
    <HomeCardContainer>
      <TopCard>
        <p>HOME</p>
        <img src={homeGif} alt=""/>
      </TopCard>
      <CardContent>
        <p>Essa é sua pagina principal, venha aqui para ficar por dentro de todas as novidades do Stackle e interagir com nossa incrível comunidade.</p>
        <HomeBtn onClick={func}>Criar Postagem</HomeBtn>
        <img src={AstronautImg} alt=""/>
      </CardContent>
    </HomeCardContainer>
  )
}