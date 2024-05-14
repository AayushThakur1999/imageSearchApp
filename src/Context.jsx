import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
  const storedDarkTheme = localStorage.getItem('darkTheme');

  if (storedDarkTheme === null) {
    return prefersDarkMode;
  }
  return storedDarkTheme === 'true';
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchText, setSearchText] = useState('panda');

  const toggleTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
    // const body = document.querySelector('body');
    // body.classList.toggle('dark-theme', newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme])

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleTheme, searchText, setSearchText }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);