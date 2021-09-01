import React, {createContext} from 'react';

const pages = {
    pageNumber : 2,
    itemsPerPage: 12
}

const PagesContext = createContext(pages);

export default PagesContext;