import styled from 'styled-components';

export const TitleContainer = styled.div`
  padding-bottom: 2.5rem;

  h2, h3 {
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
  }

  h2 {
    color: ${({ theme }) => theme.colors.blueColor};
    font-size: 2.25rem;

    @media (max-width:390px) {
      font-size: 1.875rem;
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.secondaryFontColor};
    font-size: .875rem;
    letter-spacing: 2px;
    font-weight: 500;

    &::after {
      content: '';
      width: 120px;
      height: 1px;
      display: inline-block;
      background: ${({ theme }) => theme.colors.orangeColor};
      margin: 4px 10px;
    }
  }
`;
