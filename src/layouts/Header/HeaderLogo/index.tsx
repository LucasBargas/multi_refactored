import React from 'react';
import * as S from './styles';

export const HeaderLogo = (): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.HeaderLogoContainer>
      <a href="/" onClick={handleClick}>
        Multi
      </a>
    </S.HeaderLogoContainer>
  );
};
