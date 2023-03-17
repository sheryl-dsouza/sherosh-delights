import React from 'react';
const Navigation = ({pages, activePage, setActivePage}) => {
  const handlePageClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  return (
    <div className="navigation-container">
      <div className="pages-container">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`page ${index === activePage ? 'active' : ''}`}
            onClick={() => handlePageClick(index)}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;