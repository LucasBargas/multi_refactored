import React from 'react';
import * as S from './styles';

interface Props {
  title: string;
  subTitle: string;
}

export const Title = ({ title, subTitle }: Props): JSX.Element => {
  return (
    <S.TitleContainer>
      <h3>{subTitle}</h3>
      <h2>{title}</h2>
    </S.TitleContainer>
  );
};
