import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "./../Utils/funciones";
import { ItemList } from "../ItemList/ItemList";

import React from "react";

export default function ItemDetailContainer() {
	const { idCategoria } = useParams();
	const [productos, setProductos] = useState([]);
	const categorias = [
		{ idCategoria: "1", categoria: "DestinosNacionales" },
		{ idCategoria: "2", categoria: "DestinosInternacionales" },
		{ idCategoria: "3", categoria: "Promociones" },
	];
	useEffect(() => {
		if (idCategoria) {
			consultarBDD("../json/productos.json").then((products) => {
				//busco la categoria por el params y guardo el id
				const categoriaId = categorias.find(
					(data) => data.categoria === idCategoria
				).id;
				//filtro por el id
				const prods = products.filter(
					(prod) => prod.idCategoria === categoriaId
				);
				const items = ItemList({ prods });
				setProductos(items);
			});
		} else {
			consultarBDD("./json/productos.json").then((prods) => {
				const items = ItemList({ prods });
				setProductos(items);
			});
		}
	}, [idCategoria]);

	return <div className="row cardProductos">{productos}</div>;
}