import { useEffect, createContext, useContext, useState, useMemo } from 'react'
import { initializeAction } from '../actions/isInitialized'
import api from '../api'

const Context = createContext()

export const useAppContext = () => useContext(Context)

export default function AppContextProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false)

  const dispatch = useDispatch()

  const [cart, setCart] = useState({})

  useEffect(() => {
    if (!sessionStorage.token) return

    api.setup(sessionStorage.token)
    dispatch(initializeAction())
  }, [])

  const value = useMemo(
    () => ({ isInitialized, setIsInitialized, cart, setCart }),
    [isInitialized, setIsInitialized, cart, setCart],
  )
  return <Context.Provider value={value}>{children}</Context.Provider>
}