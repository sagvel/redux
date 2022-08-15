import React, { useState } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users.actions';

const UsersList = ({ users, currentPage, nextPage, prevPage }) => {
  const totalItems = users.length;
  const itemsPerPage = 3;
  const [itemsFrom, setItemsFrom] = useState(0);
  const [itemsTo, setItemsTo] = useState(itemsPerPage);
  const usersData = users.slice(itemsFrom, itemsTo);
  const goPrev = () => {
    setItemsFrom(itemsFrom - itemsPerPage);
    setItemsTo(itemsTo - itemsPerPage);
    prevPage();
  };

  const goNext = () => {
    setItemsFrom(itemsFrom + itemsPerPage);
    setItemsTo(itemsTo + itemsPerPage);
    nextPage();
  };

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
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
