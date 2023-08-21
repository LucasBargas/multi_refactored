import styled from 'styled-components';

export const ServicesCardsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCardsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.orangeColor};
  width: 4rem;
  height: 4rem;
  border-radius: 5px;
  transition: .3s;
  position: relative;
  transform-style: preserve-3d;
  z-index: 2;

  &::after {
    content: '';
    width: 4rem;
    height: 4rem;
    background: #f9c6bb;;
    border-radius: 5px;
    position: absolute;
    top: -8px;
    left: -8px;
    z-index: 1;
    transform: translateZ(-1px);
    transition: .3s;
  }

  svg {
    color: ${({ theme }) => theme.colors.lightColor};
    font-size: 1.75rem;
    transition: .3s;
  }
`;
export const ServicesCardsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, .1);
  padding: 5rem .625rem;
  text-align: center;
  background: #fefefe;
  transition: .3s;

  &:hover {
    background: ${({ theme }) => theme.colors.orangeColor};

    h3, p {
      color: ${({ theme }) => theme.colors.lightColor};
    }

    div {
      background: ${({ theme }) => theme.colors.lightColor};
    }

    svg {
      color: ${({ theme }) => theme.colors.orangeColor};
    }

    ${ServicesCardsIcon} {
      &::after {
        background: #f1775d;
      }
    }
  }

  h3 {
    margin: 1.25rem 0 1rem 0;
    font-family: Raleway, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blueColor};
    transition: .3s;
  }

  p {
    font-size: .875rem;
    transition: .3s;
  }
`;
