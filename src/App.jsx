import './App.css'
import NavBar from './components/navBar/navBar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import AddAccount from './components/agregarcuenta/addaccount'
import CartComponentContext from './components/cartcontext/cartcontext'
import GrindForHour from './components/grind/GrindForHour'
import GrindForBillion from './components/grind/GrindForBillion'

function App() {

  return (
    <>
    <CartComponentContext/>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route exact path="/product/:id" component={<ItemListContainer/>}/>
      <Route exact path ="/sell" element={<AddAccount/>}/>
      <Route exact path="/grind-hour" element={<GrindForHour hourlyRate={2.5}/>}/>
      <Route exact path="/grind-billion" element={<GrindForBillion hourlyRate={3}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App