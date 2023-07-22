import './App.css';


import Landing from './pages/Landing';
import ListaProductos from './pages/ListaProductos';
import AgregarProducto from './pages/AgregarProducto';
import EditarProducto from './pages/EditarProducto';

//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/listaproductos' element={<ListaProductos></ListaProductos>}></Route>
        <Route path='/agregarproducto' element={<AgregarProducto></AgregarProducto>}></Route>
        <Route path='/editarproducto/:codigoproducto' element={<EditarProducto></EditarProducto>}></Route>
      </Routes>
    </Router>
  );
}

export default App;