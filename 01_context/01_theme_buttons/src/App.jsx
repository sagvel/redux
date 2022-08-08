import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import { ThemeContext } from './themes-context';
import { themes } from './themes-context';

export default class App extends Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark;
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

// import React, { useState } from 'react';
// import ThemedButton from './ThemedButton';
// import { ThemeContext } from './themes-context';
// import { themes } from './themes-context';

// const App = () => {
//   const [theme, setTheme] = useState(themes.light);

//   const toggleTheme = () => {
//     const newTheme = theme === themes.dark ? themes.light : themes.dark;
//     setTheme(newTheme);
//   };

//   return (
//     <div>
//       <ThemeContext.Provider value={theme}>
//         <ThemedButton onClick={toggleTheme}>Dynamic Theme</ThemedButton>
//       </ThemeContext.Provider>
//       <ThemedButton onClick={toggleTheme}>Default Theme</ThemedButton>
//     </div>
//   );
// };

// export default App;
