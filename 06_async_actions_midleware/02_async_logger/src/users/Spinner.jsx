import React from 'react';
import { connect } from 'react-redux';
import { isFetchingSelector } from './users.selectors';

const Spinner = ({ isFetching }) => {
  return isFetching && <span className="spinner"></span>;
};

const mapState = state => {
  return {
    isFetching: isFetchingSelector(state),
  };
};

export default connect(mapState)(Spinner);
