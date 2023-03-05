import { createContext, useState } from 'react'

export const GlobalContext = createContext({
  isVisible: Boolean,
  handleMenu: () => {},
})

export const GlobalProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleMenu = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <GlobalContext.Provider value={{ isVisible, setIsVisible, handleMenu }}>
      {children}
    </GlobalContext.Provider>
  )
}
