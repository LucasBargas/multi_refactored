import * as S from './styles';

interface Props {
  home: boolean;
}

export const Loading = ({ home }: Props): JSX.Element => {
  return (
    <S.LoadingContainer home={home}>
      <div></div>
    </S.LoadingContainer>
  );
};
