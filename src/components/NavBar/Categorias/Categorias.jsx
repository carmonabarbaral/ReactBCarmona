import { Link } from "react-router-dom";
export const Categorias = () => {
   let Categorias =[
    {nombre:"DestinosNacionales",
      id: 1
  },
  {nombre:"DestinosInternacionales",
  id:2
},
 {nombre:"Promociones",
  id:3
 } ]
  return (
       <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu">
              { Categorias.map ((a) =>{
                return (<li key ={a.id} >
                  <Link className="dropdow-item" to ={`/category/${a.nombre}`}>{a.nombre}</Link>
                  </li>
                )

              })

              }
            </ul>
      </li>
    )
  }