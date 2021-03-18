import React, { useContext, useState } from 'react'

type Props = {
    children: React.ReactChild
}

const AlertContext = React.createContext({})

export const useAlert = () => {
    return useContext(AlertContext)
}
export const AlertProvider = ({ children }:Props) => {
    const [alert, setAlert] = useState(false);
    const toggle = () => setAlert(prev => !prev)

	return( 
    <AlertContext.Provider value={{
        visible:alert,
        toggle
    }}>
        {children}
        </AlertContext.Provider>
    )
}
