const BASE_URL = 'https://62ef78d08d7bc7c2eb7a658d.mockapi.io/tasks';

export const getTasksList = () => {
  return fetch(BASE_URL).then(response => response.json());
};

export const createTask = taskData => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatesTaskData) => {
  return fetch(`${BASE_URL}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatesTaskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${BASE_URL}/${taskId}`, {
    method: 'DELETE',
  });
};
