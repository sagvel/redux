export const NEXT_PAGE = 'USERS/NEXT_PAGE';
export const PREV_PAGE = 'USERS/PREV_PAGE';

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};
