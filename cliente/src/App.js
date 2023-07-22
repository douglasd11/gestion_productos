import './App.css';


import Landing from './pages/Landing';
import ListaProductos from './pages/ListaProductos';
import AgregarProducto from './pages/AgregarProducto';
import EditarProducto from './pages/EditarProducto';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} exact></Route>
        <Route path='/listaproductos' element={<ListaProductos></ListaProductos>} exact></Route>
        <Route path='/agregarproducto' element={<AgregarProducto></AgregarProducto>} exact></Route>
        <Route path='/editarproducto/:codigoproducto' element={<EditarProducto></EditarProducto>} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
