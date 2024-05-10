import Navbar from "./components/Navbar"
import PhotoBoard from "./components/PhotoBoard"
import PhotoItem from "./components/PhotoItem"
import Upload from "./components/Upload"

const App = () => {
  return (
    <div>
      <Navbar/>
      <PhotoBoard/>
      <PhotoItem/>
      <Upload/>
    </div>
  )
}

export default App
