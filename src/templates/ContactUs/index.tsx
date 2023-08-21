import * as S from './styles';
import Container from '../../components/Container';
import { Title } from '../../components/Title';
import { ContactUsDatas } from './ContactUsDatas';
import { ContactUsForm } from './ContactUsForm';

interface Props<T> {
  id: T;
}

export const ContactUs = ({ id }: Props<string>): JSX.Element => {
  return (
    <S.ContactUsContainer id={id}>
      <Container defaultPadding>
        <Title subTitle="Contact" title="Contact Us" />

        <S.ContactUsArea>
          <ContactUsDatas />
          <ContactUsForm />
        </S.ContactUsArea>
      </Container>
    </S.ContactUsContainer>
  );
};
