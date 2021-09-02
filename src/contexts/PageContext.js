import React, { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = (props) => {
  const [pageNumber, updatePageNumber] = useState(1);
  const itemsPerPage = 12;

  function incrementPageNumber(e) {
    e.preventDefault();
    if (pageNumber < 545 / itemsPerPage + 1);
    updatePageNumber(pageNumber + 1);
  }

  function decrementPageNumber(e) {
    e.preventDefault();
    if (pageNumber > 1) {
      updatePageNumber(pageNumber - 1);
    }
  }

  return (
    <PageContext.Provider
      value={[pageNumber, incrementPageNumber, decrementPageNumber]}
    >
      {props.children}
    </PageContext.Provider>
  );
};
