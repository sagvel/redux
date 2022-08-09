import React, { useContext } from 'react';
import { UserContext } from './user_context';

const UserMenu = () => {
  const user = useContext(UserContext);

  return (
    <div className="menu">
      <span className="menu__greeting">Hello, {user.name}</span>
      <img alt="User Avatar" src={user.avatar_url} className="menu__avatar" />
    </div>
  );
};

export default UserMenu;
