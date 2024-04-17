import { useReducer } from 'react'

const Usereduce = () => {
    const coutReduce = (state , action) =>{
         switch(action.type){
            case "In" :
            return{ count : state.count+1};
            case "De" :
           return{ count: state.count > 0? state.count-1: state.count};
           default:
            return state;
         }
    }
   const [state ,disptch] =useReducer(coutReduce , {count:0})
  return (
    <div>
       <h1>Use Reduce</h1>
        <button onClick={()=>disptch({type:"In"})}>+</button>
         <h1>{state.count}</h1>
         <button onClick={()=> disptch({type:"De"})}>-</button>
         
    </div>
  )
}

export default Usereduce
