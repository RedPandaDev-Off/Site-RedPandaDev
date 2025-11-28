

import './App.css'
import Heros from './Components/Heros'
import HexBackground from './Components/HexBackground'
import Navbar from './Components/Navbar'
import Tarif from './Pages/Tarif'


function App() {


  return (
    <div>
      <Navbar />
      <Heros/>
      <Tarif />
      {/* <HexBackground /> */}
    </div>
  )
}

export default App
