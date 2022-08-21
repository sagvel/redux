import { tasksListSelector } from './tasks.selectors';
import * as tasksGateway from './tasksGateway';

export const TASKS_DATA_RECIEVED = 'TASKS/TASKS_DATA_RECIEVED';
export const ON_DELETE_TASK = 'TASKS/ON_DELETE_TASK';
export const ON_UPDATE_TASK = 'TASKS/ON_UPDATE_TASK';
export const ON_CREATE_TASK = 'TASKS/ON_CREATE_TASK';

export const tasksDataRecieved = taskData => {
  return {
    type: TASKS_DATA_RECIEVED,
    payload: {
      taskData,
    },
  };
};

export const onUpdateTask = taskId => {
  return {
    type: ON_UPDATE_TASK,
    payload: {
      taskId,
    },
  };
};

export const onDeleteTask = taskId => {
  return {
    type: ON_DELETE_TASK,
    payload: {
      taskId,
    },
  };
};

export const onCreateTasks = taskData => {
  return {
    type: ON_CREATE_TASK,
    payload: {
      taskData,
    },
  };
};

export const getTasksList = () => {
  const thunkAction = dispatch => {
    tasksGateway.getTasksList().then(data => {
      dispatch(tasksDataRecieved(data));
    });
  };

  return thunkAction;
};

export const createTask = text => {
  const newTask = {
    text,
    done: false,
    createAt: new Date().toISOString(),
  };

  const thunkAction = dispatch => {
    tasksGateway
      .createTask(newTask)
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }

        dispatch(getTasksList());
      })
      .catch(error => {
        console.log(error);
        alert('Server Error, please try later');
      });
  };

  return thunkAction;
};

export const updateTask = taskId => {
  const tunkAction = (dispatch, getState) => {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const currentTask = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...currentTask,
      done: !currentTask.done,
    };
    tasksGateway.updateTask(taskId, updatedTask).then(response => {
      if (!response.ok) {
        throw new Error();
      }
      dispatch(onUpdateTask(taskId));
    });
  };

  return tunkAction;
};

export const deleteTask = taskId => {
  const thunkActon = dispatch => {
    tasksGateway.deleteTask(taskId).then(response => {
      if (!response.ok) {
        throw new Error();
      }

      dispatch(onDeleteTask(taskId));
    });
  };

  return thunkActon;
};
