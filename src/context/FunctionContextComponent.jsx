import React from 'react';

import { useTheme, useThemeUpdate } from './ThemeContext';

const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const handleThemeChange = useThemeUpdate();

  return (
    <div>
      <h1>Function Theme</h1>
      <button onClick={handleThemeChange}>Toggle Theme</button>
      <p>{darkTheme ? 'Dark' : 'Light'}</p>
    </div>
  );
};

export default FunctionContextComponent;
