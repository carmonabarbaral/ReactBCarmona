import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "./../Utils/funciones";
import {  ItemDetail } from "../ItemDetail/ItemDetail";

import React from "react";

export default function ItemDetailContainer() {
	const { id } = useParams();
	const [producto, setProducto] = useState([]);
	useEffect(() => {
			consultarBDD("../Json/productos.json").then((products) => {
				const prods = products.filter(
					(prod) => prod.id === parseInt(id)
				);
				setProducto(...prods);
			});
	},[id]);
	return < ItemDetail className="row cardProductos" prod={producto}/>;
}