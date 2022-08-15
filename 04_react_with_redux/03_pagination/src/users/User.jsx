import React from 'react';

export const User = ({ name, age }) => {
  return (
    <>
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </>
  );
};
