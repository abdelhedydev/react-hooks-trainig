import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';


export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, setDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
