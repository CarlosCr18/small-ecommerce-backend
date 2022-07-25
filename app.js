const express = require("express");
const cors = require("cors");
const app = express();
app.use(
	cors({
		origin: "*",
		optionsSuccessStatus: 200, // For legacy browser support
		methods: "GET",
	})
);
app.use(express.static("public"));
let bodyParser = require("body-parser");

let jsonParser = bodyParser.json();
function make_order_code(length) {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

class ProductsList {
	constructor() {
		this.products = [
			{
				id: "1",
				category: "Tecnología",
				title: "Apple Laptop MacBook Air de de 2020",
				short_description:
					"Chip M1 de, Pantalla Retina de 13 Pulgadas, 8 GB de RAM, Almacenamiento SSD de 256 GB, Teclado retroiluminado, cámara FaceTime HD y Touch ID - Color Oro",
				description:
					"Acerca de este artículo\nDevoluciones: Sólo productos dañados, inoperantes al primer uso o sin abrir en caja original sellada.\nBatería para todo el día – Hasta 18 horas de batería según el uso, para hacer mucho más.\nRendimiento extraordinario – Para hacer de todo, desde editar con calidad profesional hasta disfrutar los mejores juegos de acción. El chip M1 de Apple con CPU de 8 núcleos ofrece un rendimiento hasta 3.5 veces más rápido que la generación anterior, con menos consumo de batería.\nMemoria ultrarrápida – 8 GB de memoria unificada para mayor velocidad y fluidez de todo el sistema. Ejecuta de manera rápida y fácil tareas que ocupan mucha memoria, como navegar con varias pestañas abiertas al mismo tiempo o abrir un archivo gráfico de gran tamaño.\nPantalla espectacular – Con una pantalla Retina de 13.3 pulgadas, las imágenes cobran vida con un nivel superior de realismo. Los textos se ven increíblemente nítidos y los colores son más vibrantes.",
				sale_count: "255",
				discount: "1000",
				price: "23000",
				enabled: "1",
				image_url:
					"https://ecommerceimagescrespo.s3.us-east-2.amazonaws.com/1.jpg",
				create_date: "2020-11-01 00:00:00",
				last_update: "2022-01-11 21:53:59",
			},
			{
				id: "2",
				category: "Tecnología",
				title: "Apple Nuevo MacBook Pro Chip M1",
				short_description:
					"Apple Nuevo MacBook Pro Chip M1 de (de 13 Pulgadas, 8 GB RAM, 256 GB SSD) - Color Plata (Ultimo Modelo)",
				description:
					"Acerca de este artículo\nDevoluciones: Sólo productos dañados, inoperantes al primer uso o sin abrir en caja original sellada.\nChip M1 de Apple que permite un gran avance en el rendimiento del CPU, GPU y aprendizaje automático\nLa mayor duración de batería en una Mac: hasta 20 horas para que puedas hacer mucho más\nCPU de 8 núcleos con un rendimiento hasta 2.8 veces más rápido para ejecutar flujos de trabajo a una velocidad increíble\nGPU de hasta 8 núcleos con gráficos hasta 5 veces más veloces para apps y juegos con gráficos avanzados\nNeural Engine de 16 núcleos para un aprendizaje automático avanzado\n8 GB de memoria unificada para que todo sea más rápido y fluido\nAlmacenamiento SSD superrápido para abrir apps y archivos al instante\nPantalla Retina de 13.3 pulgadas con 500 nits de brillo para que disfrutes imágenes vibrantes y un nivel de detalle increíble\nVisítanos directamente en la página de Apple para agregar la cobertura de AppleCare+",
				sale_count: "55",
				discount: "499",
				price: "34499",
				enabled: "1",
				image_url:
					"https://ecommerceimagescrespo.s3.us-east-2.amazonaws.com/2.jpg",
				create_date: "2020-11-01 00:00:00",
				last_update: "2022-01-11 22:04:45",
			},
			{
				id: "3",
				category: "Tecnología",
				title: "Apple Nuevo iMac",
				short_description:
					"Apple Nuevo iMac (de 21.5 Pulgadas, Procesador Intel Core i3 Quad Core de octava generación de 3.6 GHz, 8 GB RAM, 256 GB SSD)",
				description:
					"Acerca de este artículo\nPantalla Retina 4K de 21.5 pulgadas (diagonal) con resolución de 4096 x 2304\nProcesador Intel Core i3 de 4 núcleos o Intel Core i5 de 6 núcleos de octava generación\nProcesador gráfico AMD Radeon Pro 555X o 560X\nAlmacenamiento SSD ultrarrápido\nDos puertos Thunderbolt 3 (USB-C)\nCuatro puertos USB-A\nPuerto Gigabit Ethernet\nCámara FaceTime HD\nWi-Fi 802.11ac y Bluetooth 4.2\nVisítanos directamente en la página de Apple para agregar la cobertura de AppleCare+",
				sale_count: "100",
				discount: "1499",
				price: "36999",
				enabled: "1",
				image_url:
					"https://ecommerceimagescrespo.s3.us-east-2.amazonaws.com/3.jpg",
				create_date: "2020-11-01 00:00:00",
				last_update: "2022-01-11 22:10:18",
			},
			{
				id: "4",
				category: "Tecnología",
				title: "Apple iPhone 13 Mini",
				short_description: "Apple iPhone 13 Mini (128 GB) - Blanco Estelar",
				description:
					"Acerca de este artículo\nDevoluciones: Sólo productos dañados, inoperantes al primer uso o sin abrir en caja original sellada.\nPantalla Super Retina XDR de 5.4 pulgadas\nModo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos\nSistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision\nCámara frontal TrueDepth de 12 MP con modo Noche y grabación de video 4K HDR en Dolby Vision\nChip A15 Bionic para un rendimiento fuera de serie\nHasta 17 horas de reproducción de video\nDiseño resistente con Ceramic Shield y Resistencia al agua IP68, líder en la industria\niOS con nuevas funcionalidades para aprovechar tu iPhone al máximo\nCompatibilidad con accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida",
				sale_count: "300",
				discount: "2499",
				price: "17999",
				enabled: "1",
				image_url:
					"https://ecommerceimagescrespo.s3.us-east-2.amazonaws.com/4.jpg",
				create_date: "2020-11-01 00:00:00",
				last_update: "2022-01-11 22:10:18",
			},
			{
				id: "5",
				category: "Tecnología",
				title: "Apple iPhone 13 Pro",
				short_description: "Apple iPhone 13 Pro (256 GB) - Color Oro",
				description:
					"Acerca de este artículo\nDevoluciones: Sólo productos dañados, inoperantes al primer uso o sin abrir en caja original sellada.\nPantalla Super Retina XDR de 6.1 pulgadas con ProMotion que brinda una respuesta más rápida y fluida\nModo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos\nNuevo sistema de cámaras Pro de 12 MP (teleobjetivo, gran angular y ultra gran angular), escáner LiDAR, rango de zoom óptico de 6x, fotografía macro, Estilos Fotográficos, video ProRes, HDR Inteligente 4, modo Noche, Apple ProRAW y grabación de video 4K HDR en Dolby Vision\nCámara frontal TrueDepth de 12 MP con modo Noche y grabación de video 4K HDR en Dolby Vision\nChip A15 Bionic para un rendimiento fuera de serie\nHasta 22 horas de reproducción de video, la mayor duración de batería jamás vista en un iPhone\nDiseño resistente con Ceramic Shield y Resistencia al agua IP68, líder en la industria\niOS con nuevas funcionalidades para aprovechar tu iPhone al máximo\nCompatibilidad con accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida",
				sale_count: "95",
				discount: "500",
				price: "28999",
				enabled: "1",
				image_url:
					"https://ecommerceimagescrespo.s3.us-east-2.amazonaws.com/4.jpg",
				create_date: "2020-11-01 00:00:00",
				last_update: "2022-01-11 22:10:18",
			},
		];
	}

	updateList(id = -1, amount = 0) {
		this.products = this.products.map((product) => {
			if (product.id == id) {
				let new_count = product.sale_count - amount;
				return { ...product, sale_count: new_count };
			}
			return product;
		});
	}

	get list() {
		return this.products;
	}

	getProduct(id) {
		let filtered_product = this.products.filter((product) => {
			return product.id == id;
		});
		return filtered_product[0];
	}
}

let products = new ProductsList();
let order_id = 100;
let user_id = "Test";
let myOrders = [];

// Error handler
app.use(function (err, req, res, next) {
	if (err) {
		res
			.status(err.status || 500)
			.type("txt")
			.send(err.message || "SERVER ERROR");
	}
});

app.get("/", (req, res) => {
	res.status(200).sendFile(__dirname + "/views/index.html");
});

app.get("/api/getList", function (req, res) {
	let response = products.list;
	res.status(200).json({ response });
});

app.get("/api/orders", function (req, res) {
	let response = myOrders.map((element) => element);
	res.status(200).json({ response });
});
app.post("/api/detail", jsonParser, function (req, res) {
	let response = myOrders.filter((order, i) => {
		return order.id == req.body.order_id;
	});
	response = response[0].product_list;
	res.status(200).json({ response });
});

app.post("/api/create", jsonParser, function (req, res) {
	order_id++;

	let discount = 0;
	let subtotal = 0;
	let product_list = [];
	req.body.product_list.forEach((body_product) => {
		body_product = [
			{ ...body_product, ...products.getProduct(body_product.product_id) },
		];

		body_product[0].total =
			body_product[0].price * body_product[0].qty -
			body_product[0].discount * body_product[0].qty;
		discount += parseFloat(body_product[0].discount) * body_product[0].qty;
		subtotal += parseFloat(body_product[0].price) * body_product[0].qty;
		product_list.push(body_product[0]);
		products.updateList(body_product[0].product_id, body_product[0].qty);
	});

	let costs = {
		discount: discount,
		subtotal: subtotal,
		total: subtotal - discount,
	};

	let newOrder = {
		id: order_id,
		user_id: user_id,
		...req.body,
		...costs,
		product_list: product_list,
		order_code: make_order_code(13),
		paid: "1",
		enabled: "1",
		create_date: new Date().toLocaleString(),
		last_update: new Date().toLocaleString(),
	};

	myOrders.push(newOrder);

	let response = "OK";
	res.status(200).json({ response });
});

// Unmatched routes handler
app.use(function (req, res) {
	if (req.method.toLowerCase() === "options") {
		res.end();
	} else {
		res.status(404).type("txt").send("Not Found");
	}
});

const listener = app.listen(process.env.PORT || 3001, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
