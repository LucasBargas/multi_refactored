import styled from 'styled-components';

export const FaqListArea = styled.ul`
  li {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgb(233, 241, 251);

    div {
      display: flex;
      gap: 2.25rem;
      padding: 2rem .75rem;

      @media (max-width: 1024px) {
        gap: 1.5rem;
        flex-direction: column;
      }

      h4 {
        display: flex;
        font-size: 1rem;
        width: 40%;
        font-weight: 500;

        @media (max-width: 1024px) {
          width: 100%;
        }

        svg {
          margin-right: .625rem;
          font-size: 1.25rem;
          position: relative;
          top: 1px;
          color: #669ee5;
        }
      }

      p {
        font-size: .9375rem;
        width: 60%;

        @media (max-width: 1024px) {
          width: 100%;
        }
      }
    }
  }
`;
