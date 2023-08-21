import styled from 'styled-components';

export const FooterTopInfoContainer = styled.div`
  background: #05101e;
  border-top: 4px solid ${({ theme }) => theme.colors.orangeColor};
  padding: 1.875rem 1.25rem;
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: ${({ theme }) => theme.colors.lightColor};

  @media (min-width: 1280px) {
    width: 34%;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: .875rem;
    font-style: italic;
    line-height: 1.5rem;
    margin: 1.25rem 0 1rem 0;
  }

  ul:first-of-type {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    li {
      font-size: .875rem;

      &:nth-of-type(2) {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const FooterTopInfoMedias = styled.ul`
  display: flex;
  justify-content: center;
  gap: .5rem;
  padding-top: 1.25rem;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;
    border-radius: 4px;
    width: 2rem;
    height: 2rem;
    background: #0A1E38;
    color: ${({ theme }) => theme.colors.lightColor};
    cursor: pointer;
    transition: .3s;

    &:hover {
      background: ${({ theme }) => theme.colors.orangeColor};
    }
  }
`;
