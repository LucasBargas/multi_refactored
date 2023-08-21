import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header<{ height: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => (height ? '5.125rem' : '4rem')};
  z-index: 2000;
  background: ${({ theme }) => theme.colors.lightColor};
  transition: .4s;

  ${({ height }) =>
    !height &&
    css`
      box-shadow: rgba(0, 0, 0, .1) 0px 2px 15px;
  `}

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none;

    @media (max-width: 992px) {
      display: block;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavButton = styled.div`
  display: none;

  button {
    display: block;
    padding: .5rem 0 .5rem .5rem;
  }

  @media (max-width: 992px) {
    display: flex;
  }

  svg {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.blueColor};
  }
`;
