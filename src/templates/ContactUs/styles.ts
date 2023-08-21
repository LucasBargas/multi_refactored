import styled from 'styled-components';

export const ContactUsContainer = styled.section`
  background: ${({ theme }) => theme.colors.backgroundColor};
`;

export const ContactUsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
