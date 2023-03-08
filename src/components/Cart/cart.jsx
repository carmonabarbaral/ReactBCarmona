import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"


export const Cart = () => {
  const carrito = [ {id: 1, idCategoria: 1,cantidad: 20,destino: "Cataratas del Iguazu",precio:110700,stock: 20,img: "https://firebasestorage.googleapis.com/v0/b/proyecto-carmona1.appspot.com/o/cataratas.jpg?alt=media&token=07758653-6c0a-46f8-913c-667c79d9a533"},{id: 2, idCategoria: 1,cantidad: 30,destino: "San Carlos de Bariloche",precio:90000,stock: 50,img: "https://firebasestorage.googleapis.com/v0/b/proyecto-carmona1.appspot.com/o/Bariloche.jpg?alt=media&token=b6975c95-a2f5-424d-af78-56e6cd9c889a"} ]
      return (
        <>
          {
            carrito.length === 0
            ? //Si no existen productos en el carrito
              <>
                  <h2>Carrito vacio</h2>
                  <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
              </>
            : //Si existen productos en el carito
              <div className="container cartContainer">
                  <ItemList prods={carrito} plantilla="ItemCart"/>
                  <div className="divButtons">
                    <p>Resumen de la compra: PrecioTotal</p>
                    <button className="btn btn-danger" onClick={() => console.log("Productos eliminados")}>Vaciar Carrito</button>
                    <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                    <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                  </div>
              </div>
          }
        
        </>
      )
    
    }
    