const BASE_URL = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const getData = () => {
  return fetch(BASE_URL).then(response => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
};
