import Container from '../../components/Container';
import { Title } from '../../components/Title';
import { ServicesCards } from './ServicesCards';

interface Props<T> {
  id: T;
}

export const Services = ({ id }: Props<string>): JSX.Element => {
  return (
    <section id={id}>
      <Container defaultPadding>
        <Title subTitle="Services" title="Check Our Services" />
        <ServicesCards />
      </Container>
    </section>
  );
};
