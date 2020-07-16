import React, { createContext, useState } from 'react';
import Teste from './teste'
import MyContext from './context';

function App() {
  const [someValue, setSomeValue] = useState({ msg: 'Olá mundo!' })

  const updateValue = async (key, val) => {
    await setSomeValue({...someValue, [key]: val});
  }

  return (
    <MyContext.Provider value={{state: someValue, updateValue}}>
      <Teste />
    </MyContext.Provider>
  );
}

export default App;
