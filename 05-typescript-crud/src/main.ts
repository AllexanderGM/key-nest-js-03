// CRUD -> Leer, Crear 🟢, Actualizar, Borrar

import products from "./modules/products";

products.create({
  name: "Producto 1",
  price: 100,
  stock: 10,
});

products.create({
  name: "Producto 2",
  price: 200,
  stock: 20,
});

console.log(products.listProducts);
