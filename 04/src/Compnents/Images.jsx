import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Images = ({url , page=1 , limit=10}) => {
       const [images , setimages] = useState([]);
       const [currentSlide , setCurrentSlider] =useState(0);
       const [errorMsg , setErrorMsg] = useState(null)
      

const fetchImages = async () =>{
   try {

    const response = await fetch(`${url}?page=${page}&limit=${limit}`)
    const data =  await response.json();
    //  console.log(data);
     setimages(data)
     
   } catch (error) {
    setErrorMsg(e.message);
    setloading(false);
   }
}

function handlePrevious() {
    setCurrentSlider(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlider(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
useEffect(()=>{
    if(url !== "") fetchImages(url);
} ,[url])

// console.log(images);






// if (loading) {
//     return <div>Loading data ! Please wait</div>;
//   }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }




  return (
    
       <div className="container">
          <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
         />
         {
            images && images.length ? images.map((imagesItem ,index)=>(
               <img 
                 key={imagesItem.index}
                 src={imagesItem.download_url}
                alt={imagesItem.download_url}
                className={
                    currentSlide === index
                      ? "current-image"
                      : "current-image hide-current-image"
                  }
                />
            ))
            :null
         }

        <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() =>setCurrentSlider(index)}
              ></button>
            ))
          : null}
      </span>
       </div>
    
  )
}

export default Images
