import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import * as tasksActions from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TasksList = ({ tasks, getTasksList }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <ul className="list">
      {tasks.map(({ id, text, done }) => (
        <li key={id} className={classNames('list-item', { 'list-item_done': done })}>
          <Task text={text} done={done} id={id} />
        </li>
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ),
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
};

export default connect(mapState, mapDispatch)(TasksList);
