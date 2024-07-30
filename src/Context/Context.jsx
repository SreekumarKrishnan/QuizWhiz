import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [result, setResult] = useState({});

  return (
    <MyContext.Provider value={{ result, setResult}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };