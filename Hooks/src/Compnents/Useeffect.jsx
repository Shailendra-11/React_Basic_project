import React, { useEffect, useState } from 'react'

const Useeffect = () => {
     const [count ,setcount] = useState(0);

    useEffect(()=>{
          console.log("use effect");
          document.title = count;
    }, [count])
  return (
    <div>
        <h1>UseEffect</h1>
        <button onClick={()=> setcount(count+1)}>+</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Useeffect
