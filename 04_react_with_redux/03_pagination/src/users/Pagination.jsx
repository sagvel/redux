import React from 'react';

export const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const visiblePageNumber = currentPage + 1;
  let isPrevPageAvailable = false;
  let isNextPageAvailable = false;

  if (currentPage > 0) {
    isPrevPageAvailable = true;
  }

  if (totalItems / visiblePageNumber > itemsPerPage) {
    isNextPageAvailable = true;
  }

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{visiblePageNumber}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};
