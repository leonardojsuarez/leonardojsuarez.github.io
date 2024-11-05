import { useContext, ReactNode, FC, useState, useEffect } from 'react'
import { ConfigContext } from './ConfigContext'
import { LIGHT, DARK, SPANISH, ENGLISH, ConfigurationType, CONFIG_KEY } from '@/types'

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider:FC<ThemeProviderProps> = ({ children }) => {
    const initialState:ConfigurationType = localStorage.getItem(CONFIG_KEY) ? JSON.parse(localStorage.getItem(CONFIG_KEY)!) : {language: SPANISH, theme: DARK }
    const [config, setConfig] = useState(initialState)
    
    const toggleTheme = () => setConfig({...config, theme: DARK === config.theme ? LIGHT : DARK })

    useEffect(() => {
        localStorage.setItem(CONFIG_KEY, JSON.stringify(config))
    }, [config])

    return (
        <ConfigContext.Provider value={{config, toggleTheme}}>
            {children}
        </ConfigContext.Provider>
    )
}