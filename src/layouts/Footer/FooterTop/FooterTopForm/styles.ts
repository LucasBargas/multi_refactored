import styled from 'styled-components';

export const FooterTopFormContainer = styled.div`
  @media (min-width: 1280px) {
    width: 34%;
  }

  p {
    font-size: .875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.lightColor};
    margin-top: 1.25rem;
  }

  form {
    display: flex;
    padding-top: 2rem;

    input {
      padding: 0px 0.75rem;
    }

    button, input {
      border-radius: 0 !important;
      height: 2.5rem;
      border: none;
    }
  }
`;
