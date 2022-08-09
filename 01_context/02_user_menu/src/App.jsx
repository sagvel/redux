import React, { Component } from 'react';
import Header from './Header';
import { user } from './user_context';
import { UserContext } from './user_context';

export default class App extends Component {
  state = {
    userData: user,
  };
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

// const App = () => {
//   const [userData, setUser] = useState(user);
//   return (
//     <div>
//       <UserContext.Provider value={userData}>
//         <Header />
//       </UserContext.Provider>
//     </div>
//   );
// };

// export default App;
