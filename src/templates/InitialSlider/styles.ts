import styled, { keyframes } from 'styled-components';

export const titleAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const textAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const buttonAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

interface SliderProps {
  src: string;
  idActive: number;
}

export const InitialSliderContainer = styled.section`
  background: ${({ theme }) => theme.colors.blueColor};
  height: calc(100vh - 5.125rem);
  position: relative;
`;

export const InitialSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InitialSliderSingle = styled.div<SliderProps>`
  display: flex;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-image: url(${({ src }) => src});
  width: 100%;
  height: calc(100vh - 5.125rem);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: .6s;

  &:nth-of-type(${({ idActive }) => idActive}) {
    z-index: 1;
    opacity: initial;

    h1 {
      animation: ${titleAnimation} 1s forwards;
    }

    p {
      animation: ${textAnimation} 1s forwards .4s;
    }

    a {
      animation: ${buttonAnimation} 1s forwards .8s;
    }
  }

  &::after {
    content: '';
    background: rgba(4, 12, 21, .5);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;

export const InitialSliderSingleContent = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 992px) {
    padding: 0 1.5rem;
  }

  h1 {
    font-size: 3rem;
    font-family: Raleway, sans-serif;
    color: ${({ theme }) => theme.colors.lightColor};

    @media (max-width: 390px) {
      font-size: 2.25rem;
    }
  }

  p {
    width: 50%;
    color: ${({ theme }) => theme.colors.lightColor};
    margin: 10px 0px 30px;

    @media (max-width: 1024px) {
      width: 80%;
      margin: 10px auto 30px;
    }

    @media (max-width: 992px) {
      width: 70%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  h1, p, a {
    opacity: 0;
  }
`;
