import React from 'react'
import Treeview from './Compnents/Treeview'
import menus from "./Compnents/Data"

const App = () => {
  return (
    <div>
       <Treeview menus={menus}/>
    </div>
  )
}

export default App
