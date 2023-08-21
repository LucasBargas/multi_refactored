import styled from 'styled-components';

export const ContainerWrapper = styled.div<{ defaultPadding?: boolean }>`
  width: 100%;
  max-width: 1296px;
  margin: 0 auto;
  padding: ${({ defaultPadding }) => !!defaultPadding && '3.75rem 0'};

  @media (max-width: 1366px) {
    max-width: 1105px;
  }

  @media (max-width: 1024px) {
    padding: 3.75rem 2.75rem;
  }

  @media (max-width: 480px) {
    padding: 3.75rem 1.25rem;
  }
`;
