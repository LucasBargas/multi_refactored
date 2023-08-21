import React from 'react';
import * as S from './styles';
import { FaArrowUp } from 'react-icons/fa';

export const ReturnButton = (): JSX.Element => {
  const [visible, setVisible] = React.useState(false);

  const handleClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 100) setVisible(true);
      else if (window.scrollY < 100) setVisible(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.ReturnButtonContainer visible={visible} onClick={handleClick}>
      <FaArrowUp />
    </S.ReturnButtonContainer>
  );
};
