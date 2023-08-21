import React from 'react';
import * as S from './styles';
import { BiMap, BiEnvelope, BiPhoneCall } from 'react-icons/bi';

export const ContactUsDatas = (): JSX.Element => {
  return (
    <S.ContactUsContainer>
      <S.ContactUsBox>
        <i>
          <BiMap />
        </i>
        <h3>Our Address</h3>
        <p>A108 Adam Street, New York, NY 535022</p>
      </S.ContactUsBox>

      <S.ContactUsBox>
        <i>
          <BiEnvelope />
        </i>
        <h3>Email Us</h3>

        <ul>
          <li>info@example.com</li>
          <li>contact@example.com</li>
        </ul>
      </S.ContactUsBox>

      <S.ContactUsBox>
        <i>
          <BiPhoneCall />
        </i>
        <h3>Call Us</h3>

        <ul>
          <li>+1 5589 55488 55</li>
          <li>+1 6678 254445 41</li>
        </ul>
      </S.ContactUsBox>
    </S.ContactUsContainer>
  );
};
