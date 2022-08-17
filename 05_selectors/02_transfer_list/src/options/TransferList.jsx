import React from 'react';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

const TransferList = () => {
  return (
    <>
      <AvailableOptions title="Available options" />
      <SelectedOptions title="Selected options" />
    </>
  );
};

export default TransferList;
