import React from 'react';
import * as S from './styles';
import { BsList } from 'react-icons/bs';
import Container from '../../components/Container';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';

export const Header = (): JSX.Element => {
  const [showNav, setShowNav] = React.useState<boolean>(false);
  const [height, setHeight] = React.useState(true);

  const handleOutsideClick = (e: React.MouseEvent): void => {
    if (showNav && e.target === e.currentTarget) {
      setShowNav(false);
    }
  };

  React.useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 100) setHeight(false);
      else if (window.scrollY < 100) setHeight(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.HeaderContainer height={height}>
      <Container>
        <S.HeaderWrapper>
          <HeaderLogo />

          <HeaderNav
            showNav={showNav}
            setShowNav={setShowNav}
            handleOutsideClick={handleOutsideClick}
          />

          {!showNav && (
            <S.HeaderNavButton>
              <button
                onClick={() => {
                  setShowNav(true);
                }}
              >
                <BsList />
              </button>
            </S.HeaderNavButton>
          )}
        </S.HeaderWrapper>
      </Container>
    </S.HeaderContainer>
  );
};
