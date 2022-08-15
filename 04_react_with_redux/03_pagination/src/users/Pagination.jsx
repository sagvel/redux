import React from 'react';

export const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const visiblePageNumber = currentPage + 1;
  const isPrevPageAvailable = () => {
    if (currentPage) {
      return false;
    }
    return true;
  };

  const isNextPageAvailable = () => {
    return totalItems / visiblePageNumber > itemsPerPage;
  };

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable()}>
        {!isPrevPageAvailable() && '←'}
      </button>
      <span className="pagination__page">{visiblePageNumber}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable()}>
        {isNextPageAvailable() && '→'}
      </button>
    </div>
  );
};
