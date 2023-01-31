import { CartWidget } from "../CartWidget/CartWidget/CartWidget"
import { Categorias } from "./Categorias/Categorias"
import { Secciones } from "./Secciones/Secciones"
import React from 'react';
export const Navbar = ({valor}) => {
  return (
     <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Secciones/>
          <Categorias/>
      </ul>
      <CartWidget cantCarrito={19}/>
    </div>
  </div>
</nav>
   
  )
}