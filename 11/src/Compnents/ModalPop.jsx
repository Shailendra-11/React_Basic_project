import { useState } from "react"
import Modal from "./Modal"
import "./modal.css"


const ModalPop = () => {
const [showpop , setpop] = useState(false)
function handleToggleModalPop (){
    setpop(!showpop)
}

function onClose(){
    setpop(false)
}
  return (
    <div>
         <button onClick={handleToggleModalPop}>Open Model Popup</button>
    
    {
        showpop && (
            <Modal
            id={"custom-id"}
            header={<h1>Customized Header</h1>}
            footer={<h1>Customized Footer</h1>}
            onClose={onClose}
            body={<div>Customized body</div>}
    
            />
        )
    }

</div>
  )
}

export default ModalPop
