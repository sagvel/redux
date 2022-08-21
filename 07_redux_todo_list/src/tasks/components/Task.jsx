import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as tasksActions from '../tasks.actions';

const Task = ({ id, done, text, updateTask, deleteTask }) => {
  return (
    <>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => updateTask(id)}
      />
      <span className={classNames({ 'list-item__text': done })}>{text}</span>
      <button className="list-item__delete-btn" onClick={() => deleteTask(id)}></button>
    </>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};

export default connect(null, mapDispatch)(Task);
