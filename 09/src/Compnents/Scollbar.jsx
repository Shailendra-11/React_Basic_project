import "./scroll.css"
import { useState } from 'react';
import { useEffect } from 'react';

const Scollbar = () => {
     const [products  , setproducts] =useState()
     const [scrollPercentage, setScrollPercentage] = useState(0);
    const Fetch =  () =>{
        fetch('https://dummyjson.com/products?limit=100')
        .then(response=>response.json())
        .then(data => setproducts(data.products))
     
   }


useEffect(()=>{
     Fetch();
   }, [])
// console.log(products);
  
function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(products, scrollPercentage);

  return (
    <div>
       <div className="top-container">
           <h1>Custom Scroll Indicator</h1>
           <div className="scroll-progress-tracking-container">
             <div className='current-progress-bar'
              style={{ width:`${scrollPercentage}%` }}
             
             >
            </div>
          </div>
          </div>
          <div className="data-container">
             {
                products && products.length >0 ?
                 products.map((item)=>(
                    <p key={item.id}>{item.title}</p>
                 ))
                :null
             }
          </div>
       </div>
    
  )
}

export default Scollbar;
