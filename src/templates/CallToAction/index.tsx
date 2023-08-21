import * as S from './styles';
import Container from '../../components/Container';
import { Button } from '../../components/Button';
import { Theme } from '../../styles/Theme';

export const CallToAction = (): JSX.Element => {
  return (
    <S.CallToActionContainer>
      <Container defaultPadding>
        <h2>Call To Action</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <Button
          border={Theme.colors.orangeColor}
          background={Theme.colors.blueColor}
          color={Theme.colors.lightColor}
          bgHover={Theme.colors.orangeColorHover}
          colorHover={Theme.colors.lightColor}
          link
        >
          Call To Action
        </Button>
      </Container>
    </S.CallToActionContainer>
  );
};
