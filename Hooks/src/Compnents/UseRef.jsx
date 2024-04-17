import { useRef } from 'react'

const UseRef = () => {
     const input =  useRef(null);

     console.log(input);

     const focus = () =>{
        input.current.focus()
     }  
  return (
    <div>
       <h1>Use Ref</h1>
       <input  type="text" ref={input} placeholder='Enter your name' />
         <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRef
