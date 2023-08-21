import React from 'react';
import * as S from './styles';
import { BsXLg } from 'react-icons/bs';
import { useHomepageRef } from '../../../hooks/useHomepageRef';

interface Props {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  handleOutsideClick: (e: React.MouseEvent) => void;
}

const nav: string[] = [
  'home',
  'about',
  'services',
  'portfolio',
  'team',
  'contact',
];

export const HeaderNav = ({
  showNav,
  setShowNav,
  handleOutsideClick,
}: Props): JSX.Element => {
  const { homepageRef } = useHomepageRef();
  const [currentSection, setCurrentSection] = React.useState(1);

  const handleScrollToSection = (
    idByLink: string,
    sections: Element[],
  ): void => {
    const section = sections.find((item) => item.id === idByLink);

    if (section instanceof HTMLElement) {
      const getTop = section.offsetTop;
      window.scrollTo({
        top: idByLink !== 'home' ? getTop - 50 : 0,
        behavior: 'smooth',
      });
    }
  };

  const handleClick = (e: React.MouseEvent, idByLink: string): void => {
    e.preventDefault();

    if (homepageRef.current) {
      setShowNav(false);
      const sections = Array.from(homepageRef.current?.children);
      handleScrollToSection(idByLink, sections);
    }
  };

  React.useEffect(() => {
    const handleScroll = (): void => {
      if (!homepageRef.current) return;

      const sectionsWithId = Array.from(homepageRef.current?.children)
        .filter((section) => section.hasAttribute('id'))
        .map((section) => {
          if (section instanceof HTMLElement) {
            return {
              section,
              offset: section.offsetTop - 70,
            };
          }

          return section;
        });

      sectionsWithId.forEach(({ section, offset }) => {
        if (window.scrollY > offset) {
          nav.forEach((link, index) => {
            if (link === section.id) {
              setCurrentSection(index + 1);
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [homepageRef]);

  return (
    <S.HeaderNav
      showNav={showNav}
      currentSection={currentSection}
      onClick={handleOutsideClick}
    >
      <ul>
        {nav.map((el, id) => (
          <li key={id}>
            <a
              href={`#${el}`}
              onClick={(e) => {
                handleClick(e, el);
              }}
            >
              {el}
            </a>
          </li>
        ))}
      </ul>

      <S.HeaderNavCloseButton>
        <button
          onClick={() => {
            setShowNav(false);
          }}
        >
          <BsXLg />
        </button>
      </S.HeaderNavCloseButton>
    </S.HeaderNav>
  );
};
