import { Link } from "react-router-dom";
import {ItemCount} from "../ItemCount/ItemCount";
import { useDarkModeContext } from "../../Contex/DarkModeContext";
import { useCarritoContext } from "../../Contex/CarritoContex"
export const ItemDetail = ({prod}) =>{
    const darkMode = useDarkModeContext()
    const { addItem } = useCarritoContext()

    const onAdd = (cantidad) => { //Agregar producto al carrito
        addItem (prod,cantidad)
      }
    return (
        <div className="row g-0">
         <div className="col-md-4">
        <img src={prod.img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
    <div className={`card-body ${darkMode && "itemDetailBodyDark"}`}>
            <h5 className="card-title">{prod.destino}</h5>
            <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
            <p className="card-text">Stock: {prod.stock}</p>
             <ItemCount ValInicial={1} stock={prod.stock} onAdd={onAdd}/> 
    <Link className="nav-link" to={`/cart`}><button className="btn btn-dark">Finalizar Compra</button></Link>
        </div>  
    </div>
    </div>
  

    )
}