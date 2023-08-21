import React from 'react';
import Container from '../../components/Container';
import { Title } from '../../components/Title';
import { AboutTexts } from './AboutTexts';
import { AboutCards } from './AboutCards';

interface Props<T> {
  id: T;
}

export const About = ({ id }: Props<string>): JSX.Element => {
  return (
    <section id={id}>
      <Container defaultPadding>
        <Title subTitle="About" title="About Us" />
        <AboutTexts />
        <AboutCards />
      </Container>
    </section>
  );
};
