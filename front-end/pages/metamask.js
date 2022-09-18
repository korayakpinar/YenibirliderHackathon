import { useState } from 'react';
import { useContext } from 'react';
import React from 'react';
import {
  ReferenceDataContext,
  ReferenceDataContextProvider,
} from 'back-end/backend2';
export default function App() {
  const { unicornTypes } = useContext(ReferenceDataContext);
  return (
    <ReferenceDataContext.Provider>
      return(
      <h1>Hello lan</h1>)
    </ReferenceDataContext.Provider>
  );
}
