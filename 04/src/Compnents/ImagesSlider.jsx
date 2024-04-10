import "./styles.css"
import Images from "./Images"
const ImagesSlider = () => {
  return (
    <div>
      <Images  url={"https://picsum.photos/v2/list"}
        page={"2"}
        limit={"20"}/>
    </div>
  )
}

export default ImagesSlider
