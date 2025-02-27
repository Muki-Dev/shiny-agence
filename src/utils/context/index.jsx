import { createContext,useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
 
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const SurveyContext = createContext();

export const SurveyProvider = ({children}) => {
    const [answers,setAnswers] = useState({});

    const saveAnswer = (newAnswer) => {
        setAnswers({...answers, ...newAnswer})
    }
    
    return(
        <SurveyContext.Provider value={{ answers, saveAnswer}}>
            {children}
        </SurveyContext.Provider>
    )
}
