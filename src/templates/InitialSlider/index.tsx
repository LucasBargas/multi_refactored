import React from 'react';
import * as S from './styles';
import { Theme } from '../../styles/Theme';
import slideOne from '../../assets/images/slide-1.jpg';
import slideTwo from '../../assets/images/slide-2.jpg';
import slideThree from '../../assets/images/slide-3.jpg';
import useInterval from 'use-interval';
import { Button } from '../../components/Button';
import { InitialSliderControllerDots } from './InitialSliderControllerDots';
import { InitialSliderControllerButtons } from './InitialSliderControllerButtons';

interface Props<T> {
  id: T;
}

const slideItems = [
  {
    src: slideOne,
    title: 'Welcome to Multi',
    text: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
  {
    src: slideTwo,
    title: 'Lorem Ipsum Dolor',
    text: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
  {
    src: slideThree,
    title: 'Sequi ea ut et est quaerat',
    text: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
];

export const InitialSlider = ({ id }: Props<string>): JSX.Element => {
  const [idActive, setIdActive] = React.useState<number>(1);
  const [timer, setTimer] = React.useState<null | number>(4000);

  const handleWithTimer = (): void => {
    setTimeout(() => {
      setTimer(4000);
    }, 4000);
  };

  const handleClickRight = (): void => {
    setTimer(null);
    if (idActive < slideItems.length) setIdActive(idActive + 1);
    else setIdActive(1);
    handleWithTimer();
  };

  const handleClickLeft = (): void => {
    setTimer(null);
    if (idActive === 1) setIdActive(slideItems.length);
    else setIdActive(idActive - 1);
    handleWithTimer();
  };

  useInterval(() => {
    handleClickRight();
  }, timer ?? null);

  return (
    <S.InitialSliderContainer id={id}>
      <S.InitialSliderWrapper>
        {slideItems.map((item, index) => (
          <S.InitialSliderSingle
            idActive={idActive}
            key={index + 1}
            src={item.src}
          >
            <S.InitialSliderSingleContent>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <Button
                border={Theme.colors.orangeColor}
                background={Theme.colors.orangeColor}
                color={Theme.colors.lightColor}
                bgHover={Theme.colors.orangeColorHover}
                link
              >
                Read Mote
              </Button>
            </S.InitialSliderSingleContent>
          </S.InitialSliderSingle>
        ))}
      </S.InitialSliderWrapper>

      <InitialSliderControllerDots
        idActive={idActive}
        slideItems={slideItems}
        setIdActive={setIdActive}
      />

      <InitialSliderControllerButtons
        handleClickLeft={handleClickLeft}
        handleClickRight={handleClickRight}
      />
    </S.InitialSliderContainer>
  );
};
