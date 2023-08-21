import React from 'react';
import * as S from './styles';
import bg from '../../assets/images/why-us.jpg';
import { WhyUsOrderedList } from './WhyUsOrderedList';

export const WhyUs = (): JSX.Element => {
  return (
    <S.WhyUsContainer>
      <S.WhyUsBg src={bg}></S.WhyUsBg>
      <WhyUsOrderedList />
    </S.WhyUsContainer>
  );
};
