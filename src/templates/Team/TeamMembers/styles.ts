import styled from 'styled-components';

export const TeamMembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamMemberCard = styled.div`
  position: relative;
  z-index: 13;

  &:hover {
    ul {
      opacity: 1;
      width: 20%;
      transition: .3s;

      @media (max-width: 480px) {
        width: 15%;
      }
    }

    div {
      opacity: 1;

      h3, span {
        transform: translate3d(0, 0, 0);
        opacity: 1;
        transition: .4s;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    opacity: 0;
    transition: .3s;
    background: rgba(11, 35, 65, .5);
    z-index: 15;

    li {
      margin-top: .9375rem;

      a {
        color: ${({ theme }) => theme.colors.lightColor};
        font-size: 1.25rem;
        transition: .4s;

        &:hover {
          color: ${({ theme }) => theme.colors.orangeColor};
        }
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 14;
    background: linear-gradient(0deg, rgba(11, 35, 65, 0.9) 0%, rgba(11, 35, 65, 0.8) 20%, rgba(0, 212, 255, 0) 100%);
    width: 100%;
    height: 100%;
    padding-bottom: 1.5rem;
    opacity: 0;
    transition: .4s;

    h3, span {
      width: 80%;
      text-align: center;
      color: ${({ theme }) => theme.colors.lightColor};
      transform: translate3d(0, 25px, 0);
      opacity: 0;
      transition: .4s;

      @media (max-width: 480px) {
        width: 85%;
      }
    }

    h3 {
      font-family: "Raleway", sans-serif;
      font-size: 1.125rem;
      margin-bottom: .25rem;
    }

    span {
      font-style: italic;
      font-size: .8125rem;
    }
  }
`;
