import React from 'react';
import * as S from './styles';

interface Props {
  defaultPadding?: boolean;
  children: JSX.Element | JSX.Element[];
}

const Container = ({ defaultPadding, children }: Props): JSX.Element => {
  return (
    <S.ContainerWrapper defaultPadding={defaultPadding}>
      {children}
    </S.ContainerWrapper>
  );
};

export default Container;
