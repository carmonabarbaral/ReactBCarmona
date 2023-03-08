import {Link} from "react-router-dom"
import { useDarkModeContext} from "../../Contex/DarkModeContext";
export const Item = ({item}) => {

  const {darkMode} = useDarkModeContext()
  return (
    <div className={`card mb-3 cardProducto  ${darkMode ? 'border-dark': 'border-light'}`}>
          <img src={item.img} className="card-img-top" alt={`imagen de ${item.nombre}`} />
          <div className={`card-body ${darkMode ? 'cardBodyDark':'cardBody'}`}>
              <h5 className="card-title"> {item.destino}</h5>
              <p className="card-text">${item.precio}</p>
              <Link className="nav-link" to={`/Item/${item.id}`}><button className="btn btn-dark">Ver Producto</button></Link>
          </div>
      </div>
  
    )
  }