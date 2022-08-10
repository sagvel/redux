export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE/USER';

export const addUser = (id, name) => {
  return {
    type: ADD_USER,
    payload: { id, name },
  };
};

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
