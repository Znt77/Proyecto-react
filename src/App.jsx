import './App.css'
import NavBar from './components/navBar/navBar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import AddAccount from './components/agregarcuenta/addaccount'
import CartComponentContext from './components/cartcontext/cartcontext'

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
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App