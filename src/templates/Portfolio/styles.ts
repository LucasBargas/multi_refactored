import styled from 'styled-components';

export const PortfolioNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;

    li {
      button {
        text-transform: uppercase;
        font-family: "Open Sans", sans-serif;
        padding: .5rem 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.blueColor};
        background: transparent;
        transition: .5s;

        &:hover {
          color: ${({ theme }) => theme.colors.orangeColor};
        }
      }

      &.active {
        button {
          color: ${({ theme }) => theme.colors.orangeColor};
        }
      }
    }
  }
`;
