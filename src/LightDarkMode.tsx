//I don't understand the full requirement of this exercise.
// All i can pick out is that we need the state to be toggled between light and dark mode
//No clarity of expected implementation
import React, { useState } from 'react';

export const App = () => {
  return <Main />;
};

export const Main = () => {
  return (
    <div>
      <Settings />
    </div>
  );
};

export const Settings = () => {
  const [dark, setDark] = useState(false);

  const toggleMode = React.useCallback(() => {
    setDark((prev) => !prev);
  }, []);

  return (
    <>
      <button onClick={toggleMode}>toggle light/dark mode</button>
      <div
        style={{
          color: `${dark ? 'white' : 'black'}`,
          backgroundColor: `${dark ? 'black' : 'white'}`,
        }}
      >
        <p>Hello</p>
      </div>
    </>
  );
};
