import { useEffect, createContext, useContext, useState, useMemo } from 'react'
import api from '../api'

const Context = createContext()

export const useAppContext = () => useContext(Context)

export default function AppContextProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    if (!sessionStorage.token) return
    api.setup(sessionStorage.token)
  }, [])

  const value = useMemo(
    () => ({ isInitialized, setIsInitialized}),
    [isInitialized, setIsInitialized],
  )
  return <Context.Provider value={value}>{children}</Context.Provider>
}