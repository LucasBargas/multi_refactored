import { TestimonialsContainer } from './styles';
import Container from '../../components/Container';
import { Title } from '../../components/Title';
import { TestimonialsSlider } from './TestimonialsSlider';

export const Testimonials = (): JSX.Element => {
  return (
    <TestimonialsContainer>
      <Container defaultPadding>
        <Title subTitle="Testimonials" title="Testimonials" />
        <TestimonialsSlider />
      </Container>
    </TestimonialsContainer>
  );
};
