import { Link } from "react-router-dom";
import React from "react";
export const Categorias = React.memo(() => {
   const Categorias =[
    {nombre:"DestinosNacionales",
      idCategoria:1
  },
  {nombre:"DestinosInternacionales",
  idCategoria:2
},
 {nombre:"Promociones",
  idCategoria:3
 } ]
  return (
       <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu">
              { Categorias.map ((a) =>{
                return (<li key ={a.nombre} >
                  <Link className="dropdow-item text-decoration-none"  to ={`/category/${a.nombre}`}>{a.nombre}</Link>
                  </li>
                )

              })

              }
            </ul>
      </li>
    )
  })