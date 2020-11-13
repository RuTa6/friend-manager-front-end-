import React, { useState } from 'react';

import AppContext from './appContext'

const AppProvider = (props) => {

  const [state, setState] = useState("Hello")


  return (
    <AppContext.Provider value={{
      value: state,
      setValue: setState
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;