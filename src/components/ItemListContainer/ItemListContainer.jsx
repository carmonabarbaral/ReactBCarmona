import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { consultarBDD } from '../Utils/funciones.js'

import { ItemList } from '../ItemList/ItemList.jsx'

export const ItemListContainer = () => {
  const {idCategoria} = useParams()
  const [productos, setProductos] = useState([])
  const categorias=[
      { id: "1",
      categoria: "Destinos Nacionales"},
      {id: "2",
      categoria: "Destinos Internacionales"},
      { id: "3",
      categoria: "Promociones"}
   ]
   useEffect(() => {
    if(idCategoria){
      consultarBDD ("/Json/productos.json").then(products => {
        //busco la categoria por el params y guardo el id
        const categoriaId = categorias.find((data)=> data.categoria === idCategoria)?.id
        //filtro por el id
        const prods = products.filter(prod => prod.idCategoria === categoriaId)
        const items = ItemList({prods})
        setProductos(items)
      })
    }
    else{
      consultarBDD('/Json/productos.json').then(prods => {
        const items = ItemList({prods})
        setProductos(items)
      })
    }
  }, [idCategoria]);

  return(
    <div className='row cardProductos'>
      {productos}
    </div>
  )
  }