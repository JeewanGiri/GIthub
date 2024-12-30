import { BrowserRouter,Routes, Route } from "react-router-dom"
import InputData from "./component/InputData"
import Create from "./component/Create"
import Update from "./component/Update"
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<InputData/>}/>
         <Route path="/create" element={<Create/>}/>
         <Route path="/update" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
