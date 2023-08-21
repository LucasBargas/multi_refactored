import * as S from './styles';
import Container from '../../components/Container';
import { Title } from '../../components/Title';
import { TeamMembers } from './TeamMembers';

interface Props<T> {
  id: T;
}
export const Team = ({ id }: Props<string>): JSX.Element => {
  return (
    <S.TeamContainer id={id}>
      <Container defaultPadding>
        <Title subTitle="Team" title="Check Our Team" />
        <TeamMembers />
      </Container>
    </S.TeamContainer>
  );
};
