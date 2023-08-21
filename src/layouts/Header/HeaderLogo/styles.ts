import styled from 'styled-components';

export const HeaderLogoContainer = styled.div`
  a {
    font-family: Raleway, sans-serif;
    text-transform: uppercase;
    font-size: 1.625rem;
    color: ${({ theme }) => theme.colors.blueColor};
    font-weight: 700;
  }
`;
