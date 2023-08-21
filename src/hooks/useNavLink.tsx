/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';

interface Props {
  children: JSX.Element;
}

interface HomepageRefContextData {
  homepageRef: React.RefObject<HTMLDivElement>;
}

const HomepageRefContext = React.createContext<HomepageRefContextData>(
  {} as HomepageRefContextData,
);

export const HomepageRefProvider = ({ children }: Props): JSX.Element => {
  const homepageRef = React.useRef<HTMLDivElement>(null);

  return (
    <HomepageRefContext.Provider value={{ homepageRef }}>
      {children}
    </HomepageRefContext.Provider>
  );
};

export const useHomepageRef = (): HomepageRefContextData => {
  const { homepageRef } = React.useContext(HomepageRefContext);

  return {
    homepageRef,
  };
};
