import React  , { useContext}from 'react'

import ThemaContext from '../context/ThemaContext'


const Button = () => {

    const{ theme, setTheme }= useContext(ThemaContext)

    console.log(theme,setTheme)
  return (
    <div>Button
        aktiv theme = {theme}
        <button onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}>change thema</button>
        
    </div>
  )
}

export default Button