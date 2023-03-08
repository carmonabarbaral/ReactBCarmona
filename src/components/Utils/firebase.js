
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc,getDocs, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgV9pb4KKU8r2qW_YgCi6YQDi3UbUiWuM",
  authDomain: "proyecto-carmona1.firebaseapp.com",
  projectId: "proyecto-carmona1",
  storageBucket: "proyecto-carmona1.appspot.com",
  messagingSenderId: "517594541432",
  appId: "1:517594541432:web:7f1a434fcf18b227b8ac8d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore ();

//CRUDE//

export const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
      await addDoc(collection(db, "productos"), { //collection si existe productos, lo consulta sino lo crea y lo consulta
          nombre: prod.destino,
          idCategoria: prod.idCategoria,
          stock: prod.stock,
          precio: prod.precio,
          img: prod.img
      })
  })

}
export const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(prod => {
    return { ...prod.data(), id: prod.id }
})
return items
}
export const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = { ...producto.data(), id: producto.id }
  return item
}
