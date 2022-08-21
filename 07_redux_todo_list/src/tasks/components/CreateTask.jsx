import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksActions from '../tasks.actions';

const CreateTask = ({ createTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const onCreateTask = () => {
    createTask(inputValue);
    setInputValue('');
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="btn create-task__btn" onClick={onCreateTask}>
        Create
      </button>
    </div>
  );
};

CreateTask.propTypes = {
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  createTask: tasksActions.createTask,
};

export default connect(null, mapDispatch)(CreateTask);
