import React from 'react';
import * as S from './styles';
import { FiChevronDown } from 'react-icons/fi';
import { whyUsQuestion } from '../../../utils/whyUsQuestions';

export const WhyUsOrderedList = (): JSX.Element => {
  const [listActive, setListActive] = React.useState<number[]>([1]);

  const handleClick = (id: number): void => {
    if (listActive.includes(id)) {
      setListActive(listActive.filter((listId) => listId !== id));
      return;
    }

    setListActive([...listActive, id]);
  };

  return (
    <S.WhyUsOrderedListContainer>
      <h2>
        Eum ipsam laborum deleniti <span>velit pariatur architecto</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure
        dolor in reprehenderit
      </p>

      <S.WhyUsOrderedListArea>
        {whyUsQuestion.map((item) => (
          <li
            key={item.id}
            className={listActive.includes(item.id) ? 'active' : ''}
          >
            <div
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <span>0{item.id}</span>
              <h3>{item.question}</h3>
              <i>
                <FiChevronDown />
              </i>
            </div>

            <p>{item.answer}</p>
          </li>
        ))}
      </S.WhyUsOrderedListArea>
    </S.WhyUsOrderedListContainer>
  );
};
