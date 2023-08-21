import * as S from './styles';
import Container from '../../components/Container';
import { FooterTop } from './FooterTop';

export const Footer = (): JSX.Element => {
  return (
    <S.FooterContainer>
      <Container defaultPadding>
        <FooterTop />

        <S.FooterBottomArea>
          <p>
            © Copyright <strong>Multi</strong>. All Rights Reserved
          </p>
          <p>
            Esta aplicação web é uma réplica desenvolvida por{' '}
            <a
              target="_blank"
              href="https://projetoslucasbargas.vercel.app/"
              rel="noopener noreferrer"
            >
              Lucas Bargas
            </a>{' '}
            com base em um layout gratuito disponibilizado na web. Porém, toda a
            codificação é própria.
          </p>
        </S.FooterBottomArea>
      </Container>
    </S.FooterContainer>
  );
};
