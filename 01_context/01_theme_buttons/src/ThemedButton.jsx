import React, { useContext } from 'react';
import { ThemeContext } from './themes-context';

const ThemedButton = props => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <button
      className="btn"
      {...props}
      style={{ color: theme.fontColor, backgroundColor: theme.background }}
    >
      {props.children}
    </button>
  );
};

export default ThemedButton;
