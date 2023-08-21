import styled from 'styled-components';

export const InitialSliderControllerButtonsContainer = styled.div`
    @media (max-width: 480px) {
    display: none;
  }

  button {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 5;
    width: 3.25rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, .2);
    border-radius: 100%;
    transition: .4s;

    &:hover {
      background: rgba(255, 255, 255, .3);
    }

    svg {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, .5);
      transition: .4s;

      &:hover {
        color: rgba(255, 255, 255, .7);
      }
    }

    &:first-of-type {
      left: 1rem;
    }

    &:last-of-type {
      right: 1rem;
    }
  }
`;
