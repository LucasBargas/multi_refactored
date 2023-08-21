import styled from 'styled-components';

interface ButtonProps {
  border: string;
  background: string;
  color: string;
  bgHover?: string;
  colorHover?: string;
}

export const ButtonContainer = styled.div<ButtonProps>`
  a, button {
    display: inline-block;
    padding: 10px 40px;
    border: 2px solid ${({ border }) => border};
    background: ${({ background }) => background};
    font-family: "Open Sans", sans-serif;
    color: ${({ color }) => color};
    border-radius: 4px;
    font-weight: 600;
    font-size: .875rem;
    transition: .4s;

    &:hover {
      background: ${({ bgHover }) => bgHover};
      color: ${({ colorHover }) => colorHover};
    }
  }
`;
