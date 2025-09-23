class Producto {
  codigo_2: string;
  titulo: string;
  categoria: string;
  color: string;
  precio: number;
  stock: number;
  activo: boolean;

  constructor(
    cod: string,
    titulo: string,
    categoria: string,
    color: string,
    precio: number,
    stock: number,
    activo: boolean
  ) {
    this.codigo_2 = cod;
    this.titulo = titulo;
    this.categoria = categoria;
    this.color = color;
    this.precio = precio;
    this.stock = stock;
    this.activo = activo;
  }
}

const camisa = new Producto("prod-12", "Camisa playera", "Hombre", "Azul", 29.99, 100, true);
const pantalon = new Producto("prod-34", "Pantalón vaquero", "Mujer", "Negro", 49.99, 50, true);
const zapatos = new Producto("prod-56", "Zapatos deportivos", "Unisex", "Blanco", 79.99, 30, false);

console.log(camisa);
console.log(pantalon);
console.log(zapatos);
