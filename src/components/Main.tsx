import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode; // or React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;