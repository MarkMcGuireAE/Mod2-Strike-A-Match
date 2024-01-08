import { Route,  Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import GamePage1 from "./pages/GamePage1"
import GameBoard from "./pages/GameBoard"
import GameBoard2 from "./pages/GameBoard2"
import GameBoard3 from "./pages/GameBoard3"


function App() {
  

  return (
    <Routes>
      <Route  path="/" element={<Homepage/>}  />
      <Route path="/GamePage1/:user" element={<GamePage1/>} />
      <Route path="/GamePage1/:user/GameBoard" element={<GameBoard/>} />
      <Route path="/GamePage1/:user/GameBoard/GameBoard2" element={<GameBoard2/>} />
      <Route path="/GamePage1/:user/GameBoard/GameBoard2/GameBoard3" element={<GameBoard3/>} />
    </Routes>
   
  )
}

export default App
