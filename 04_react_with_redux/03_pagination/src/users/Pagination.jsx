import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  let isPrevPageAvailable = false;
  let isNextPageAvailable = false;

  if (currentPage > 0) {
    isPrevPageAvailable = true;
  }

  if (currentPage < totalItems / itemsPerPage - 1) {
    isNextPageAvailable = true;
  }

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
