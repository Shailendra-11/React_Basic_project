
import React, { useState } from 'react'
const Usestate = () => {
    const [cout , setcout] = useState(0)
    return (
      <div className='main'>
            <button onClick={()=>setcout(prev => (prev+1))}>+</button>
            <p>{cout}</p>
            <button onClick={
              ()=>setcout(prev => (prev > 0 ? prev-1: prev))}>-</button>
      </div>

    )
}
export default Usestate;
