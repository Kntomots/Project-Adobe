import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './Pages/Home'
import SingleCard from './Pages/SingleCard'
export default function (){

return (
  <>
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}></Route>
    <Route path='/card' element={<SingleCard/>}></Route>

  </Routes>
  
  </BrowserRouter>
  </>
)
}