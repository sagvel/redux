import React, { useState } from 'react';
import Header from './Header';
import { user } from './user_context';
import { UserContext } from './user_context';

const App = () => {
  const [userData, setUser] = useState(user);
  return (
    <div>
      <UserContext.Provider value={userData}>
        <Header />
      </UserContext.Provider>
    </div>
  );
};

export default App;
