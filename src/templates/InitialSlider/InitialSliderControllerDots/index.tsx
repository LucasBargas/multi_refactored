import React from 'react';
import * as S from './styles';

interface Props {
  idActive: number;
  slideItems: Array<{
    src: string;
    title: string;
    text: string;
  }>;
  setIdActive: React.Dispatch<React.SetStateAction<number>>;
}

export const InitialSliderControllerDots = ({
  idActive,
  slideItems,
  setIdActive,
}: Props): JSX.Element => {
  return (
    <S.InitialSliderControllerDotsContainer idActive={idActive}>
      {slideItems.map((item, index) => (
        <li
          key={index + 1}
          onClick={() => {
            setIdActive(index + 1);
          }}
        ></li>
      ))}
    </S.InitialSliderControllerDotsContainer>
  );
};
