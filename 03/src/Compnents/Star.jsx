import { IoStarOutline } from "react-icons/io5";
import "./styels.css"
import { useState } from "react";
const Star = ({noofstart}) => {
    const[rating , setrating] =useState(0);
    const[hover , sethover] =useState(0);

    const Handleclick = (getindex) =>{
        // console.log(getindex);
        setrating(getindex);
    }

    const MouseEnter = (getindex) =>{
        // console.log(getindex);
        setrating(getindex)
    }
    const MouseLeave = (getindex) =>{
        // console.log(getindex);
        sethover(getindex)
    }
  return (
    <div className="centre">
        {
              [...Array(noofstart)].map((_,index)=>{
                     index += 1;
                return(
                <IoStarOutline 
                  key={index}
                  className={index <= (hover || rating) ? "active" : "inactive"}
                   onClick={()=>Handleclick(index)}
                   onMouseMove={() =>MouseEnter(index)}
                   onMouseLeave={() =>MouseLeave()}
                   size={40}
                
                />
                );
               })
        }
     
    </div>
  )
}

export default Star
