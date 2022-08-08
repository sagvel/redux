import React, { useContext } from 'react';
import { ThemeContext } from './themes-context';

const ThemedButton = props => {
  const theme = useContext(ThemeContext);
  return (
    <button
      className="btn"
      {...props}
      style={{ color: theme.fontColor, backgroundColor: theme.background }}
    />
  );
};

export default ThemedButton;
