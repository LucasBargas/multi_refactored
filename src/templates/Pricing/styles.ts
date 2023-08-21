import styled from 'styled-components';

export const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const PricingCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem 2.5rem;
  box-shadow: rgba(110, 123, 131, .1) 0px 5px 90px 0px;
  width: calc(100% / 3);

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;
  }

  @media (max-width: 820px) {
    width: 100%;
    max-width: 370px;
  }

  &:nth-of-type(2) {
    border: 4px solid ${({ theme }) => theme.colors.orangeColor};
    height: 38.75rem;

    @media (max-width: 820px) {
      height: auto;
    }

    a {
      background: ${({ theme }) => theme.colors.orangeColor};
      border-color: ${({ theme }) => theme.colors.orangeColor};
      color: ${({ theme }) => theme.colors.lightColor};

      &:hover {
        background: ${({ theme }) => theme.colors.orangeColorHover};
      }
    }
  }

  h3, h4 {
    text-align: center;
  }

  h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: .875rem;
  }

  h4 {
    font-weight: 400;
    font-size: 2.875rem;
    color: ${({ theme }) => theme.colors.blueColor};

    &::after {
      content: 'per month';
      display: block;
      color: #bababa;
      font-size: 1.125rem;
      position: relative;
      top: -1px;
    }
  }

  ul {
    padding: 1.625rem 0 1.75rem 0;
    display: flex;
    flex-direction: column;
    gap: .75rem;

    li {
      color: #999999;
      font-size: .9375rem;

      i {
        display: inline-block;
        font-size: 1.25rem;
        position: relative;
        top: 3px;
        margin-right: 5px;
        color: ${({ theme }) => theme.colors.orangeColor};
      }

      &.inactive {
        text-decoration: line-through;

        i.inactiveIcon {
          color: #999999;
        }
      }
    }
  }
`;

export const PricingCardButton = styled.div`
  display: flex;
  justify-content: center;
`;
