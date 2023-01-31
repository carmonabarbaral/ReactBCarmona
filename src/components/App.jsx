import './App.css'; 
import ItemListContainer from './ItemListContainer/ItemListContainer';

//Components 
import { Navbar } from './NavBar/Navbar'

export const App = () => {
  //<NombreComponente/>
  return (
    <>
      <Navbar valor={10}/> 
      <ItemListContainer greeting={"Contenedor Items"}/>
      
    </>
  )
}
