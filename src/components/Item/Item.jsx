import {Link} from "react-router-dom"
import { useDarkModeContext} from "../../Contex/DarkModeContext";
export const Item = ({item}) => {

  const {darkMode} = useDarkModeContext()
  return (
    <div className={`card md-4 cardProducto  ${darkMode ? 'border-secondary': 'border-light'}`}>
          <img src={item.img} className="card-img-top" alt={`imagen de ${item.nombre}`} />
          <div className={`card-body ${darkMode ? 'cardBodyDark':'cardBody'}`}>
              <h5 className="card-title"> {item.nombre}</h5>
              <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)} </p>
              <p className="card-text"> Stock {item.stock}</p>
              <Link className="nav-link" to={`/Item/${item.id}`}><button className="btn btn-dark">Ver Producto</button></Link>
          </div>
      </div>
  
    )
  }