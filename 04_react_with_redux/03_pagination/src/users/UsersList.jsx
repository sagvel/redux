import React, { useState } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users.actions';

const UsersList = ({ users, currentPage, nextPage, prevPage }) => {
  const totalItems = users.length;
  const itemsPerPage = 3;
  const indexFrom =
    totalItems % itemsPerPage
      ? Math.ceil(currentPage * (itemsPerPage / totalItems) * 10)
      : Math.floor(currentPage * (itemsPerPage / totalItems) * 10);
  const indexTo = indexFrom + itemsPerPage;

  const usersData = users.slice(indexFrom, indexTo);

  return (
    <div>
      <Pagination
        goPrev={prevPage}
        goNext={nextPage}
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersData.map(({ id, name, age }) => (
          <li key={id} className="user">
            <User name={name} age={age} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = {
  nextPage: usersActions.nextPage,
  prevPage: usersActions.prevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
