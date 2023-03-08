import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProductos } from '../Utils/firebase'


import { ItemList } from '../ItemList/ItemList.jsx'

export const ItemListContainer = () => {
  const {idCategoria} = useParams()
  const [productos, setProductos] = useState([])
   const categorias=[
   {id: 1,
    categoria: "DestinosNacionales"},
    { id: 2,
    categoria: "DestinosInternacionales"},
    {id: 3,
    categoria: "Promociones"}
 ]
 useEffect(() => {
 
  if(idCategoria){
    getProductos().then(products => {
      const categoriaId = categorias.find((data)=>data.categoria === idCategoria)?.id
      const prods = products.filter(prod =>prod.stock >0).filter(prod => prod.idCategoria ===categoriaId)
      const items = <ItemList prods={prods} plantilla="Item"/>
      setProductos(items)
    })
  } else {
    getProductos().then(products => {
      const prods = products.filter(prod => prod.stock > 0)
      const items = <ItemList prods={prods} plantilla="Item" />
      setProductos(items)
    })
  }
}, [idCategoria])
return (
  <div className='row cardProductos'>
    {productos}
  </div>
)
}