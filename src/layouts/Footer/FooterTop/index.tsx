import * as S from './styles';
import { FooterTopInfo } from './FooterTopInfo';
import { FooterTopForm } from './FooterTopForm';
import { FiChevronRight } from 'react-icons/fi';

export const FooterTop = (): JSX.Element => {
  return (
    <S.FooterInfoContainer>
      <FooterTopInfo />

      <S.FooterInfoNav>
        <h4>Useful Links</h4>

        <nav>
          <ul>
            <li>
              <a href="#home">
                <FiChevronRight /> Home
              </a>
            </li>
            <li>
              <a href="#about">
                <FiChevronRight /> About us
              </a>
            </li>
            <li>
              <a href="#services">
                <FiChevronRight /> Services
              </a>
            </li>
            <li>
              <a href="#term-of-service">
                <FiChevronRight /> Term of service
              </a>
            </li>
            <li>
              <a href="#privacy-policy">
                <FiChevronRight /> Privacy policy
              </a>
            </li>
          </ul>
        </nav>
      </S.FooterInfoNav>

      <S.FooterInfoNav>
        <h4>Our Services</h4>

        <nav>
          <ul>
            <li>
              <a href="#web-design">
                <FiChevronRight /> Web Design
              </a>
            </li>
            <li>
              <a href="#web-development">
                <FiChevronRight /> Web Development
              </a>
            </li>
            <li>
              <a href="#product-management">
                <FiChevronRight /> Product Management
              </a>
            </li>
            <li>
              <a href="#marketing">
                <FiChevronRight /> Marketing
              </a>
            </li>
            <li>
              <a href="#graphic-design">
                <FiChevronRight /> Graphic Design
              </a>
            </li>
          </ul>
        </nav>
      </S.FooterInfoNav>

      <FooterTopForm />
    </S.FooterInfoContainer>
  );
};
