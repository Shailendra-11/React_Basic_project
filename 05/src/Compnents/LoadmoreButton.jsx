import { useEffect, useState } from "react"
import "./styles.css"

const LoadmoreButton = () => {
    const [products ,  setproducts] = useState([])
    const [count , setcount] = useState(0)
    const [disableButton, setDisableButton] = useState(false);
    const FetchProduct =  async() => {

    try{
      const response = await  fetch(`https://dummyjson.com/products?limit=20&skip=${count=== 0 ? 0 : count*20}`)
       const result = await response.json();
       
       if (result && result.products && result.products.length){
       setproducts((prev)=> [...prev  , ...result.products])
    //    setproducts(result.products)
      
       }
    }
     catch(e){
          console.log(e);
       }
    }

    useEffect(()=>{
    FetchProduct()
    }, [count])


    // console.log("useeff");
   console.log(products);

   useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);


  return (
    <div className="load-more-container">
     <div className="product-container">
       {
          products && products.length ? 
          products.map((items)=>(
            <div className="product"  key={items.id}> 
             <img src={items.thumbnail} 
             alt={items.title} />
                <p>{items.title}</p>    
           </div>
          ))
          :null
       }
       </div> 
        <div className="button-container">
         <button disabled={disableButton} onClick={()=> setcount(count+1)}>Loading more Product</button>
         {disableButton ? <p>You have reached to 100 products</p> : null}
         </div>
    </div>
  )
}

export default LoadmoreButton
