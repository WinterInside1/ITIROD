import React from 'react';

export const UserContext = React.createContext({ data: null, setData: () => {} });

export const UserContextProvider = UserContext.Provider;
