import styled from 'styled-components';

export const PortfolioAreaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 1.25rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioCard = styled.div`
  position: relative;

  &:hover {
    div {
      transform: translate3d(-50%, 0, 0);
      opacity: 1;
      transition: .4s;
    }
  }

  div {
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 1rem;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate3d(-50%, 30%, 0);
    opacity: 0;
    transition: .4s;

    @media (max-width: 1024px) {
      transform: translate3d(-50%, 0, 0);
      opacity: 1;
    }

    h3 {
      text-transform: capitalize;
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.blueColor};

      span {
        display: block;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: .875rem;
        margin-top: .25rem;
      }
    }

    ul {
      display: flex;

      li {
        cursor: pointer;
        padding: .5rem 0 .5rem .5rem;

        &:hover {
          svg {
            color: ${({ theme }) => theme.colors.orangeColor};
          }
        }

        svg {
          font-size: 1.25rem;
          color: ${({ theme }) => theme.colors.blueColor};
          transition: .4s;
        }
      }
    }
  }
`;
