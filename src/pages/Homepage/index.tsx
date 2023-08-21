import React from 'react';
import * as S from './styles';
import { InitialSlider } from '../../templates/InitialSlider';
import { About } from '../../templates/About';
import { WhyUs } from '../../templates/WhyUs';
import { Services } from '../../templates/Services';
import { Testimonials } from '../../templates/Testimonials';
import { CallToAction } from '../../templates/CallToAction';
import { Portfolio } from '../../templates/Portfolio';
import { Team } from '../../templates/Team';
import { Pricing } from '../../templates/Pricing';
import { Faq } from '../../templates/Faq';
import { ContactUs } from '../../templates/ContactUs';
import { useHomepageRef } from '../../hooks/useHomepageRef';

export const Homepage = (): JSX.Element => {
  const { homepageRef } = useHomepageRef();

  React.useEffect(() => {
    if (!homepageRef.current) throw Error('homepageRef is not assigned');
  }, [homepageRef]);

  return (
    <S.HomePageContainer ref={homepageRef}>
      <InitialSlider id="home" />
      <About id="about" />
      <WhyUs />
      <Services id="services" />
      <Testimonials />
      <CallToAction />
      <Portfolio id="portfolio" />
      <Team id="team" />
      <Pricing />
      <Faq />
      <ContactUs id="contact" />
    </S.HomePageContainer>
  );
};
