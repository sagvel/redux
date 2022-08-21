import {
  ON_CREATE_TASK,
  ON_DELETE_TASK,
  ON_UPDATE_TASK,
  TASKS_DATA_RECIEVED,
} from './tasks.actions';

const initialState = {
  tasksList: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_DATA_RECIEVED:
      return {
        ...state,
        tasksList: action.payload.taskData,
      };
    case ON_CREATE_TASK: {
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload.taskData],
      };
    }

    case ON_UPDATE_TASK: {
      const newTasksList = state.tasksList.map(task => {
        if (task.id !== action.payload.taskId) {
          return task;
        }
        return {
          ...task,
          done: !task.done,
        };
      });

      return {
        ...state,
        tasksList: newTasksList,
      };
    }
    case ON_DELETE_TASK: {
      const newTasksList = state.tasksList.filter(task => task.id !== action.payload.taskId);
      return {
        ...state,
        tasksList: newTasksList,
      };
    }
    default:
      return state;
  }
};
