import React from 'react';
import * as S from './styles';
import useInterval from 'use-interval';
import { testimonials } from '../../../utils/testimonials';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

export const TestimonialsSlider = (): JSX.Element => {
  const [active, setActive] = React.useState<number>(0);
  const [position, setPosition] = React.useState<number>(0);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [timer, setTimer] = React.useState<null | number>(2000);
  const slideRef = React.useRef<HTMLDivElement>(null);

  const handleSlidePosition = React.useCallback((): void => {
    if (!slideRef.current) return;
    const { width } = slideRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  const handleSetIsMobile = (): void => {
    window.innerWidth <= 820 ? setIsMobile(true) : setIsMobile(false);
  };

  const handleDotsClick = (index: number): void => {
    setTimer(null);
    setActive(index);
    handleWithTimer();
  };

  const handleWithTimer = (): void => {
    setTimeout(() => {
      setTimer(2000);
    }, 2000);
  };

  const handleDotsInterval = React.useCallback((): void => {
    setTimer(null);

    if (
      (!isMobile && active < testimonials.length - 2) ||
      (isMobile && active < testimonials.length - 1)
    ) {
      setActive(active + 1);
    } else {
      setActive(0);
    }

    handleWithTimer();
  }, [active, isMobile]);

  React.useEffect(() => {
    handleSlidePosition();
  }, [handleSlidePosition]);

  React.useEffect(() => {
    const handleResize = (): void => {
      handleSetIsMobile();
      handleDotsInterval();
      handleSlidePosition();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleDotsInterval, handleSlidePosition]);

  useInterval(() => {
    handleDotsInterval();
  }, timer ?? null);

  return (
    <S.TestimonialsSliderContainer>
      <S.TestimonialsSliderArea position={position}>
        {testimonials.map((testimonial) => (
          <S.TestimonialCard ref={slideRef} key={testimonial.id}>
            <S.TestimonialCardContent>
              <figure>
                <img src={testimonial.src} alt={testimonial.name} />
              </figure>
              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.occupation}</span>
                <p>
                  <ImQuotesLeft /> {testimonial.comment} <ImQuotesRight />
                </p>
              </div>
            </S.TestimonialCardContent>
          </S.TestimonialCard>
        ))}
      </S.TestimonialsSliderArea>

      <S.TestimonialsDotsController>
        {testimonials
          .map(({ id }, index) => (
            <li
              className={active === index ? 'active' : ''}
              key={id}
              onClick={() => {
                handleDotsClick(index);
              }}
            ></li>
          ))
          .slice(0, isMobile ? testimonials.length : testimonials.length - 1)}
      </S.TestimonialsDotsController>
    </S.TestimonialsSliderContainer>
  );
};
