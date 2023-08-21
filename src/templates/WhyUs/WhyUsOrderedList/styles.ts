import styled from 'styled-components';

export const WhyUsOrderedListContainer = styled.div`
  padding: 3.75rem 6.25rem;

  @media (max-width: 992px) {
    padding: 3.75rem 2.75rem;
  }

  @media (max-width: 480px) {
    padding: 3.75rem 1.25rem;
  }

  h2 {
    font-family: Raleway, sans-serif;
    font-weight: normal;
    font-size: 2.125rem;
    color: ${({ theme }) => theme.colors.blueColor};
  }

  span {
      display: inline !important;
      font-weight: bold;
    }

  p {
    color: ${({ theme }) => theme.colors.fontColor};
    margin-top: .5rem;
    font-size: .9375rem;
  }
`;

export const WhyUsOrderedListArea = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 1rem;

  li {
    background: ${({ theme }) => theme.colors.lightColor};
    box-shadow: rgba(0, 0, 0, .1) 0px 2px 15px;
    border-radius: .25rem;
    padding: 1.25rem;

    div {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-family: Poppins, sans-serif;

      &:hover {
        * {
          color: ${({ theme }) => theme.colors.orangeColor};
        }
      }

      * {
        font-weight: 500;
        transition: .3s;
      }

      span {
        color: ${({ theme }) => theme.colors.orangeColor};
        margin-right: .625rem;
      }

      h3 {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.blueColor};
      }

      i {
        display: flex;
        justify-content: flex-end;
        flex: 1;

        svg {
          color: ${({ theme }) => theme.colors.blueColor};
          font-size: 1.25rem;
          transform: rotate(0);
          transition: .4s;
        }
      }
    }

    p {
      height: 0;
      visibility: hidden;
      overflow-y: hidden;
      transition: .6s;
    }

    &.active {
      div {
        * {
          color: ${({ theme }) => theme.colors.orangeColor};
        }

        svg {
          transform: rotate(180deg);
          transition: .4s;
        }
      }

      p {
        height: 5rem;
        visibility: visible;
        transition: .6s;

        @media (max-width: 820px) {
          height: 3.25rem;
          overflow-y: auto;
        }

        @media (max-width: 820px) {
          height: 4.875rem;
        }
      }
    }
  }
`;
