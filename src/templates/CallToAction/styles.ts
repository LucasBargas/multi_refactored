import styled from 'styled-components';

export const CallToActionContainer = styled.section`
  background: ${({ theme }) => theme.colors.blueColor};
  text-align: center;

  h2, p {
    color: ${({ theme }) => theme.colors.lightColor};
  }

  h2 {
    font-family: Raleway, sans-serif;
    font-size: 1.75rem;
  }

  p {
    margin: 0.75rem 0 1.25rem 0;
  }
`;
