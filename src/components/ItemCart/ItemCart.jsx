import { useCarritoContext } from "../../Contex/CarritoContex"
export const ItemCart = ({ item }) => {
    const { removeItem } = useCarritoContext()
    return (
      <div className="card mb-3 cardCart">
         <div className="row g-0">
             <div className="col-md-4">
                 <img src={item.img} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded-start"/>
             </div>
             <div className="col-md-8">
                 <div className="card-body">
                     <h5 className="card-title">{item.nombre} </h5>
                     <p className="card-text"> Cantidad: {item.cantidad}</p>
                     <p className="card-text"> Precio Unitario: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                     <p className="card-text"> Subtotal: {item.cant * item.precio}</p>
                     <button className="btn btn-danger" onClick={() => removeItem(item.id) }>Eliminar del carrito</button>
                 </div>
             </div>
         </div>
      </div>
    )
 }