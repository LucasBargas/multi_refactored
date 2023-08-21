import styled from 'styled-components';

export const WhyUsContainer = styled.section`
  display: grid;
  grid-template-columns: 45% 55%;
  background: ${({ theme }) => theme.colors.backgroundColor};

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const WhyUsBg = styled.div<{ src: string }>`
  background-position: center;
  background-size: cover;
  background-image: url(${({ src }) => src});

  @media (max-width: 820px) {
    height: 450px;
  }
`;
