import React from 'react';
import { connect } from 'react-redux';
import * as usersAction from './users.actions';

const Users = ({ users, addUser, deleteUser }) => {
  const onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);

    addUser({
      id,
      name: `User # ${id}`,
    });
  };

  return (
    <div className="users">
      <button className="users__create-btn" onClick={onUserCreate}>
        Create user
      </button>
      <ul className="users__list">
        {users.map(user => (
          <li key={user.id} className="users__list-item">
            <span>{user.name}</span>
            <button className="users__delete-btn" onClick={() => deleteUser(user.id)}>
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  addUser: usersAction.addUser,
  deleteUser: usersAction.deleteUser,
};

export default connect(mapState, mapDispatch)(Users);
