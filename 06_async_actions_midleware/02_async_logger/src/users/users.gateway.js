const BASE_URL = 'https://api.github.com/users';

export const getUserData = userName => {
  return fetch(`${BASE_URL}/${userName}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
};
