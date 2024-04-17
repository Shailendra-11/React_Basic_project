import  { createContext, useState } from 'react'

export const Mycontext  = createContext()


const MoneyStated = (props) => {
    const [cout , setCout] = useState(0);
    const Money = {
          money : 10000,
          type : "poor",
          name : "People",
    }
  return (
     <Mycontext.Provider value={{Money,
     cout ,
     setCout}}>
        {props.children}
     </Mycontext.Provider>
  )
}

export default MoneyStated
