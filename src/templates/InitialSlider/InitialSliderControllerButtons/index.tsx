import * as S from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Props {
  handleClickRight: () => void;
  handleClickLeft: () => void;
}

export const InitialSliderControllerButtons = ({
  handleClickRight,
  handleClickLeft,
}: Props): JSX.Element => {
  return (
    <S.InitialSliderControllerButtonsContainer>
      <button onClick={handleClickLeft}>
        <FaChevronLeft />
      </button>
      <button onClick={handleClickRight}>
        <FaChevronRight />
      </button>
    </S.InitialSliderControllerButtonsContainer>
  );
};
