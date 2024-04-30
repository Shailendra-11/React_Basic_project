import { useRef, useState } from "react"
 import { test } from "./test";
const Outside = () => {
    const [showContent , setshowcontent] = useState(false)

    const ref  = useRef();
     test(ref ,() => setshowcontent(false))
  return (
    <div>
     {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() =>setshowcontent(true)}>Show Content</button>
      )}
    </div>
  )
}

export default Outside;
