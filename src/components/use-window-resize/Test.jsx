import React from 'react';
import './styles.css';
import useWindowResize from './useWindowResize';

export const Test = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div className='test'>
      <h1>useWindowResize / useResponsive Custom Hook</h1>
      <p>Width is: {width}</p>
      <p>Height is: {height}</p>
    </div>
  );
};
