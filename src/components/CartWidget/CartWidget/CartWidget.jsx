import { Link } from "react-router-dom"
export const CartWidget = ({cantCarrito}) => {
    return (
      <>
      <Link className="nav-link" to={"/cart"}><button className="btn btn-dark">Carrito<i className="bi bi-cart"></i></button></Link>
        <p>{cantCarrito}</p>
        
       
      </>
    )
  }