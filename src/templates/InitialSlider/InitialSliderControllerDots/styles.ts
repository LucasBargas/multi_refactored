import styled from 'styled-components';

export const InitialSliderControllerDotsContainer = styled.ul<{
  idActive: number;
}>`
  display: flex;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;

  li {
    height: 14px;
    width: 14px;
    border-radius: 100%;
    background: rgba(255, 255, 255, .6);
    cursor: pointer;
    margin: 0 4px;
    transition: .6s;

    &:hover {
      background: ${({ theme }) => theme.colors.orangeColor};
    }

    &:nth-of-type(${({ idActive }) => idActive}) {
      background: ${({ theme }) => theme.colors.orangeColor};
    }
  }
`;
