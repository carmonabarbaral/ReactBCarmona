export const Categorias = () => {
    return (
       <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Destinos nacionales</a></li>
              <li><a className="dropdown-item" href="#">Destinos Internacionales</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Promociones</a></li>
            </ul>
      </li>
    )
  }