import styled from 'styled-components';

export const ContactUsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactUsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.lightColor};
  box-shadow: rgba(214, 215, 216, .6) 0px 0px 30px;
  padding: 1.25rem 0px 1.875rem;
  text-align: center;

  &:first-of-type {
    grid-column: 1 / 3;
    grid-row: 1 / 2;

    @media (max-width: 576px) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.orangeColor};
    width: 3.25rem;
    height: 3.25rem;
    border: 2px dotted rgb(251, 218, 210);
    border-radius: 100%;
  }

  h3 {
    font-family: "Raleway", sans-serif;
    font-size: 1.25rem;
    color: #777777;
    font-weight: 700;
    margin: .625rem 0;
  }

  p, li {
    font-size: .75rem;
    color: ${({ theme }) => theme.colors.blueColor};
  }

  p {
    line-height: 1.25rem;
  }
`;
