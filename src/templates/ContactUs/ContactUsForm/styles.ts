import styled from 'styled-components';

export const ContactUsFormContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightColor};
  box-shadow: rgba(214, 215, 216, .6) 0px 0px 30px;
  padding: 2rem;

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      gap: .75rem
    }

    input, textarea {
      border: 1px solid rgb(206, 212, 218);
      padding: .625rem .9375rem;
      font-weight: 400;
      font-family: "Open Sans", sans-serif;
      transition: .5s;

      &:focus {
        border-color: ${({ theme }) => theme.colors.orangeColor};
      }
    }

    #subject {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }

    #message {
      grid-column: 1 / 3;
      grid-row: 3 / 4;

      textarea {
        resize: none;
      }
    }

    p {
      font-size: .6875rem;
      color: tomato;

      @media (max-width: 1024px) {
        font-size: .75rem;
      }
    }
  }
`;

export const ContactUsFormButton = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / 3;
  grid-row: 4 / 5;
`;
