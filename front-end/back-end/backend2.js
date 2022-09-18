import { createContext, useState } from 'react';

const [unicornTypes, setUnicornTypes] = useState(false);
const ReferenceDataContext = createContext({ unicornTypes, setUnicornTypes });

const ReferenceDataContextProvider = ({ children }) => {
  return (
    <ReferenceDataContext.Provider
      value={{ unicornTypes, setUnicornTypes }}
    ></ReferenceDataContext.Provider>
  );
};
export { ReferenceDataContext, ReferenceDataContextProvider };
