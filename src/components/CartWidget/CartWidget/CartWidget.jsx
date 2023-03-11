import { Link } from "react-router-dom"
import { useCarritoContext } from "../../../Contex/CarritoContex"
export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()
  return (
    <>
      <Link className="nav-link" to={"/cart"}>
        <button className="btn btn-dark cartWidget">Carrito<i class="bi bi-airplane"></i></button>
        {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
      </Link>

    </>
  )
}