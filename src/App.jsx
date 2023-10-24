import './App.css'
import NavBar from './components/navBar/navBar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import AddAccount from './components/agregarcuenta/addaccount'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<AddAccount />}/>
      <Route exact path="/productos" element={<ItemListContainer />}/>
      <Route exact path ="/manageaccounts" element={<AddAccount/> }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App