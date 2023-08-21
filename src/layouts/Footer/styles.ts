import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #071527;
`;

export const FooterBottomArea = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightColor};
  padding-top: 1.75rem;

  p {
    font-size: .875rem;
  }

  a {
    color: ${({ theme }) => theme.colors.orangeColor};
    font-weight: 600;
  }
`;
