import styled, { keyframes, css } from 'styled-components';

export const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div<{ home: boolean }>`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;

  ${({ home }) =>
    home &&
    css`
    align-items: center;
    padding: 0;
    height: 100vh;
    width: 100%;
  `}

  div {
    &::after {
      content: " ";
      display: block;
      width: 2.25rem;
      height: 2.25rem;
      margin: .5rem;
      border-radius: 50%;
      border: 7px solid ${({ theme }) => theme.colors.blueColor};
      border-color: ${({ theme }) => theme.colors.blueColor} transparent ${({
        theme,
      }) => theme.colors.blueColor} transparent;
      animation: ${loadingAnimation} .625s linear infinite;
    }
  }
`;
