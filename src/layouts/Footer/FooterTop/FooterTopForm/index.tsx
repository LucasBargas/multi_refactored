import * as S from './styles';
import { Button } from '../../../../components/Button';
import { Theme } from '../../../../styles/Theme';

export const FooterTopForm = (): JSX.Element => {
  return (
    <S.FooterTopFormContainer>
      <h4>Our Newsletter</h4>

      <p>
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna.
      </p>

      <form>
        <input type="text" />
        <Button
          border={Theme.colors.orangeColor}
          background={Theme.colors.orangeColor}
          color={Theme.colors.lightColor}
          bgHover={Theme.colors.orangeColorHover}
          colorHover={Theme.colors.lightColor}
        >
          Subscribe
        </Button>
      </form>
    </S.FooterTopFormContainer>
  );
};
