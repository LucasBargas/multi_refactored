import * as S from './styles';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from 'react-icons/fa';

export const FooterTopInfo = (): JSX.Element => {
  return (
    <S.FooterTopInfoContainer>
      <h3>Multi</h3>
      <p>
        Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam
        excepturi quod.
      </p>

      <ul>
        <li>A108 Adam Street</li>
        <li>NY 535022, USA</li>
        <li>
          <strong>Phone:</strong> +1 5589 55488 55
        </li>
        <li>
          <strong>Email:</strong> info@example.com
        </li>
      </ul>

      <S.FooterTopInfoMedias>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaSkype />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </S.FooterTopInfoMedias>
    </S.FooterTopInfoContainer>
  );
};
