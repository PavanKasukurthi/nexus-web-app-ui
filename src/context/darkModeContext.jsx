import { createContext, useContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  )

  const toggle = () => {
    setDarkMode((value) => !value)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkContext = () => {
    return useContext(DarkModeContext)
}