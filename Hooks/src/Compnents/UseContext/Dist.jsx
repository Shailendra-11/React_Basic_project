import {useContext } from "react"
import { Mycontext } from "./MoneyStated";


const Dist = () => {

  const myobj = useContext(Mycontext);

  console.log(myobj);
  return (
    <div>
       <h1>Dist</h1>
       <h1>{myobj.Money.money}</h1>
       <h1>{myobj.Money.name}</h1>

    </div>
  )
}

export default Dist
