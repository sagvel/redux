import React from 'react';
import CreateTask from './CreateTask';
import TasksList from './TasksList';

const TodoList = () => {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTask />
        <TasksList />
      </main>
    </>
  );
};

export default TodoList;
