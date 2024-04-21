
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ConfirmationPage from './pages/ConfirmationPage'
import VehicleSelection from './pages/VehicleSelection'
import CustomerForm from './pages/CustomerForm'
import Navigation from './components/Navigation'



function App() {
  

  return (
  <div>
   
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='confirmation' element={<ConfirmationPage/>} />
      <Route path='vehicleselection' element={<VehicleSelection/>} />
      <Route path='customerform' element={<CustomerForm/>} />
    </Routes>
    
    
    </BrowserRouter>
  </div>
  )
}

export default App
