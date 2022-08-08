import React from 'react';
import { ThemeContext } from './themes-context';

export default class ThemedButton extends React.Component {
  render() {
    return (
      <button
        className="btn"
        {...this.props}
        style={{ color: this.context.fontColor, backgroundColor: this.context.background }}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

// const ThemedButton = props => {
//   const theme = useContext(ThemeContext);
//   console.log(theme);
//   return (
//     <button
//       className="btn"
//       {...props}
//       style={{ color: theme.fontColor, backgroundColor: theme.background }}
//     >
//       {props.children}
//     </button>
//   );
// };

// export default ThemedButton;
