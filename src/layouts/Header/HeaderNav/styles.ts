import styled from 'styled-components';

export const HeaderNav = styled.nav<{
  showNav: boolean;
  currentSection: number;
}>`
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    background: rgba(4, 12, 21, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 0 1rem 1rem;
    opacity: ${({ showNav }) => (showNav ? '1' : '0')};
    visibility: ${({ showNav }) => (showNav ? 'visible' : 'hidden')};
    pointer-events: ${({ showNav }) => (showNav ? 'all' : 'none')};;
    transition: .3s;
  }

  ul {
    display: flex;
    overflow-y: auto;

    @media (max-width: 992px) {
      display: block;
      padding: .5rem;
      background: ${({ theme }) => theme.colors.lightColor};
      width: 100%;
      height: 100%;
      border-radius: .325rem;
    }

    li {
      &:nth-of-type(${({ currentSection }) => currentSection}) {
        a {
          color: ${({ theme }) => theme.colors.orangeColor};
        }
      }

      a {
        display: block;
        text-transform: capitalize;
        font-size: 1rem;
        padding: 1rem;
        color: ${({ theme }) => theme.colors.blueColor};
        transition: .6s;

        &:hover {
          color: ${({ theme }) => theme.colors.orangeColor};

          @media (max-width: 1024px) {
            color: ${({ theme }) => theme.colors.blueColor};
          }
        }

        @media (max-width: 992px) {
          padding: .75rem;
          font-weight: 500;
        }
      }
    }
  }
`;

export const HeaderNavCloseButton = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: inline-block;
    padding: .875rem 0;
  }

  svg {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.lightColor};
  }
`;
