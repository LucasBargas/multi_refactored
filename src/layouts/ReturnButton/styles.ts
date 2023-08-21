import styled from 'styled-components';

export const ReturnButtonContainer = styled.button<{ visible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.orangeColor};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: .25rem;
  position: fixed;
  right: .9375rem;
  bottom: .9375rem;
  z-index: 999;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: .5s;

  &:hover {
    background: ${({ theme }) => theme.colors.orangeColorHover};
  }

  svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.lightColor};
  }
`;
