import React from 'react';

import FunctionContextComponent from './context/FunctionContextComponent';
import ThemeProvider from './context/ThemeContext';

import CounterReducer from './reducer/CounterReducer';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
      <hr />
      <CounterReducer />
    </>
  );
};

export default App;
