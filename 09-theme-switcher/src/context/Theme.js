import { useContext, createContext } from "react";

// create context
export const ThemeContext = createContext({
    // can also give varibles and method
    themeMode: 'light',
    darkTheme: () => { },
    lightTheme: () => { }
    // whenever context is called, will get the above variables and method
})

// create provider
export const ThemeProvider = ThemeContext.Provider

// can also make a custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}