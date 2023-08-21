import styled from 'styled-components';

export const AboutTextsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const AboutTextsRight = styled.div`
  width: 50%;

  @media (max-width: 820px) {
    width: 100%;
  }

  ul {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: .25rem;

    @media (max-width: 820px) {
      gap: .75rem;
    }

    li {
      display: flex;

      svg {
        margin-right: 10px;
        font-size: 1.25rem;
        position: relative;
        top: 3px;
        color: ${({ theme }) => theme.colors.orangeColor};
      }
    }
  }
`;

export const AboutTextsLeft = styled.div`
  width: 50%;

  @media (max-width: 820px) {
    width: 100%;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;
