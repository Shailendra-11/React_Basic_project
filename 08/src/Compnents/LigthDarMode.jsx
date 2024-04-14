import React from 'react'
import useLocalStroage from './useLocalStroage'
 import "./styles.css"
const LigthDarMode = () => {
    const [theme  , settheme] =useLocalStroage("theme" , "dark")

  const handleToggleTheme= () =>{
    settheme(theme=== "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default LigthDarMode
