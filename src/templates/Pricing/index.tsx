import React from 'react';
import * as S from './styles';
import Container from '../../components/Container';
import { pricing } from '../../utils/pricing';
import { Title } from '../../components/Title';
import { BsCheck } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';
import { Button } from '../../components/Button';
import { Theme } from '../../styles/Theme';

export const Pricing = (): JSX.Element => {
  return (
    <section>
      <Container defaultPadding>
        <Title subTitle="Pricing" title="Our Competing Prices" />
        <S.PricingContainer>
          {pricing.map((item) => (
            <S.PricingCard key={item.id}>
              <h3>{item.plan}</h3>
              <h4>${item.value}</h4>

              <ul>
                {item.topics.map(({ topicId, topic, valid }) => (
                  <li key={topicId} className={valid ? '' : 'inactive'}>
                    {valid && (
                      <i>
                        <BsCheck />
                      </i>
                    )}
                    {!valid && (
                      <i className="inactiveIcon">
                        <IoIosClose />
                      </i>
                    )}
                    {topic}
                  </li>
                ))}
              </ul>

              <S.PricingCardButton>
                <Button
                  border={Theme.colors.blueColor}
                  background={Theme.colors.lightColor}
                  color={Theme.colors.blueColor}
                  bgHover={Theme.colors.blueColor}
                  colorHover={Theme.colors.lightColor}
                  link
                >
                  Get Started
                </Button>
              </S.PricingCardButton>
            </S.PricingCard>
          ))}
        </S.PricingContainer>
      </Container>
    </section>
  );
};
