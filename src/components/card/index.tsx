import React from 'react';
import { CardContainer, TopBar, ContentBox } from './style';

interface ICardProps {
  title: string;
  content: any;
}

export const Card = ({title, content}: ICardProps) => {
  return (
    <CardContainer>
      <TopBar>
        <p>{title}</p>
      </TopBar>

      <ContentBox>
        <img src={content} alt=""/>
      </ContentBox>

    </CardContainer>
  )
}