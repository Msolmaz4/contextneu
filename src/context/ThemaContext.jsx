import { createContext, useEffect, useState } from "react";


const ThemaContext =createContext()


// app yapmasak bursad adah atemiz olur 
//themaProvider olusturuy burdan duywenleme yapariy
export const ThemaProvider = ({children})=>{
    const [ theme, setTheme] = useState('dark')


    // useeffect kulabnacagiy
     useEffect(()=>{
        console.log(theme)
     } ,[theme])

    const values ={
        theme,
        setTheme
    }
    
//degerleri value atariz ve gondeririy


    return<ThemaContext.Provider value={values}>{children}</ThemaContext.Provider>
}

export default ThemaContext