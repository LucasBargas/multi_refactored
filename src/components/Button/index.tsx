import * as S from './styles';

interface Props {
  link?: boolean;
  children: string;
  border: string;
  background: string;
  color: string;
  bgHover?: string;
  colorHover?: string;
}

export const Button = ({
  link,
  border,
  background,
  color,
  bgHover,
  colorHover,
  children,
}: Props): JSX.Element => {
  return (
    <S.ButtonContainer
      border={border}
      background={background}
      color={color}
      bgHover={bgHover}
      colorHover={colorHover}
    >
      {!!link && (
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href="/"
        >
          {children}
        </a>
      )}
      {!link && <button type="submit">{children}</button>}
    </S.ButtonContainer>
  );
};
