import './App.css';
import 'react-toastify/dist/ReactToastify.css';


//React Router
import {BrowserRouter, Routes, Route } from "react-router-dom";

//Toastify
import { ToastContainer} from 'react-toastify';

//Context
import { DarkModeProvider } from '../Contex/DarkModeContext';
import { CarritoProvider } from '../Contex/CarritoContex';
//Firebase
import { getProductos } from "./Utils/firebase";

//components
import { Navbar } from './NavBar/Navbar'
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from "./ItemDetailContainer/ItemDetailContainer";
import { Checkout } from './Checkout/checkout';
import { Cart } from './Cart/cart';




export const App = () => {
  getProductos()
  return (
    <>
    <BrowserRouter>
    <DarkModeProvider>
     <CarritoProvider> 
          <Navbar/>
            <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/cart' element={<Cart/>}/>
            </Routes>  
            <ToastContainer/> 
           </CarritoProvider>
        </DarkModeProvider>
      </BrowserRouter>  
    </>
  )
} 