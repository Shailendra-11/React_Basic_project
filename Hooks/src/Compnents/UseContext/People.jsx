import React, { useContext } from 'react'
import { Mycontext } from './MoneyStated';


const People = () => {
  const data = useContext(Mycontext)
   console.log(data);
  return (
    <div>
        <h1>People</h1>
        <h1>{data.cout}</h1>
        <button onClick={()=> data.setCout(data.cout+1)}>++</button>
    </div>
  )
}

export default People
