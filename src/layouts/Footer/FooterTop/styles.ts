import styled from 'styled-components';

export const FooterInfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blueColor};

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  h4, a {
    color: ${({ theme }) => theme.colors.lightColor};
  }
`;

export const FooterInfoNav = styled.div`
  @media (min-width: 1280px) {
    width: 16%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: .625rem;
    padding-top: 1.25rem;

    a {
      display: inline-block;
      font-size: .875rem;
      transition: .4s;

      &:hover {
        color: ${({ theme }) => theme.colors.orangeColor};
      }

      svg {
        display: inline-block;
        color: ${({ theme }) => theme.colors.orangeColor};
        font-size: 1.125rem;
        position: relative;
        top: 2px
      }
    }
  }
`;
