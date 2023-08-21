import styled from 'styled-components';

export const TestimonialsSliderContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const TestimonialsSliderArea = styled.div<{ position: number }>`
  display: flex;
  transform: translate3d(${({ position }) => position}px, 0px, 0px);
  transition: transform .4s ease;
`;

export const TestimonialCard = styled.div`
  flex-shrink: 0;
  width: 50%;
  padding: .5rem 2.75rem;

  @media (max-width: 820px) {
    width: 100%;
    min-height: 15rem;
    padding: .5rem 6.5rem;
  }

  @media (max-width: 576px) {
    padding: .5rem 2.25rem;
  }
`;

export const TestimonialCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightColor};
  box-shadow: rgba(0, 0, 0, .1) 0px 2px 15px;
  padding: 1.875rem 1.875rem 1.875rem 3.75rem;
  height: 100%;
  position: relative;

  figure {
    position: absolute;
    top: 2rem;
    left: -2.5rem;
    border: 7px solid white;
    border-radius: 0.325rem;

    img {
      width: 5rem;
      border-radius: .325rem;
    }
  }

  div {
    max-width: 95%;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 90%;
    }

    h3 {
      font-family: 'Raleway', sans-serif;
    }

    span {
      font-size: .875rem;
      color: #9999;
      font-weight: 700;
      margin: .25rem 0 .625rem 0;
    }

    p {
      font-style: italic;
      font-size: .9375rem;
      line-height: 1.5rem;

      svg {
        display: inline-block !important;
        font-size: 1.5rem;
        color: #fdedea;

        &:last-of-type {
          position: relative;
          top: .5rem;
          left: .25rem;
        }

        &:first-of-type {
          margin-right: .25rem;
        }
      }
    }
  }
`;

export const TestimonialsDotsController = styled.ul`
  display: flex;
  justify-content: center;
  gap: .5rem;
  padding-top: 2rem;


  li {
    height: .75rem;
    width: .75rem;
    border: 1px solid ${({ theme }) => theme.colors.orangeColor};
    border-radius: 100%;
    cursor: pointer;

    &.active {
      background: ${({ theme }) => theme.colors.orangeColor};
    }
  }
`;
