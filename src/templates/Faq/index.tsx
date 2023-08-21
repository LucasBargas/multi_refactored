import React from 'react';
import * as S from './styles';
import Container from '../../components/Container';
import { Title } from '../../components/Title';
import { faqList } from '../../utils/faqList';
import { BiHelpCircle } from 'react-icons/bi';

export const Faq = (): JSX.Element => {
  return (
    <section>
      <Container defaultPadding>
        <Title subTitle="F.A.Q" title="Frequently Asked Questions" />

        <S.FaqListArea>
          {faqList.map((item) => (
            <li key={item.id}>
              <div>
                <h4>
                  <BiHelpCircle /> {item.question}
                </h4>
                <p>{item.answer}</p>
              </div>
            </li>
          ))}
        </S.FaqListArea>
      </Container>
    </section>
  );
};
