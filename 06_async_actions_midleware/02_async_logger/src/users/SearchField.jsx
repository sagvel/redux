import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const SearchField = ({ fetchingUserData }) => {
  const [userName, setUserName] = useState('');

  const onInputChange = event => {
    setUserName(event.target.value);
  };

  const handlerButton = () => {
    fetchingUserData(userName);
  };

  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={userName}
        onChange={e => onInputChange(e)}
      />
      <button className="name-form__btn btn" onClick={handlerButton}>
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchingUserData: usersActions.fetchingUserData,
};

export default connect(null, mapDispatch)(SearchField);
