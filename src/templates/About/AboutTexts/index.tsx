import React from 'react';
import * as S from './styles';
import { BsCheckAll } from 'react-icons/bs';
import { Button } from '../../../components/Button';
import { Theme } from '../../../styles/Theme';

export const AboutTexts = (): JSX.Element => {
  return (
    <S.AboutTextsContainer>
      <S.AboutTextsRight>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <ul>
          <li>
            <i>
              <BsCheckAll />
            </i>
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat;
            </span>
          </li>
          <li>
            <i>
              <BsCheckAll />
            </i>
            <span>
              Duis aute irure dolor in reprehenderit in voluptate velit;
            </span>
          </li>
          <li>
            <i>
              <BsCheckAll />
            </i>
            <span>llamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </li>
        </ul>
      </S.AboutTextsRight>

      <S.AboutTextsLeft>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button
          border={Theme.colors.orangeColor}
          background={Theme.colors.lightColor}
          color={Theme.colors.orangeColor}
          bgHover={Theme.colors.orangeColorHover}
          colorHover={Theme.colors.lightColor}
          link
        >
          Learn More
        </Button>
      </S.AboutTextsLeft>
    </S.AboutTextsContainer>
  );
};
