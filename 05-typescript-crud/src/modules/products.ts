import type { Product } from "./product";

class Products {
  public listProducts: Product[] = [];

  get(): Product[] {
    // TODO: Retornar la lista completa de productos
    // Pista: ¿Qué propiedad de la clase contiene todos los productos?
    return [];
  }

  getById(id: number): Product | undefined {
    // TODO: Buscar y retornar un producto específico por su ID
    // Pista: Usa el método find() del array para buscar el producto
    // Recuerda que si no encuentra el producto, debe retornar undefined
    return;
  }

  create(product: Product): void {
    const newProduct = {
      id: this.listProducts.length + 1,
      ...product,
    };

    this.listProducts.push(newProduct);
  }

  modify(id: number, product: Product): void {
    // TODO: Actualizar un producto existente
    // Pista 1: Primero encuentra el índice del producto usando findIndex()
    // Pista 2: Si el producto existe (índice >= 0), actualiza sus propiedades
    // Pista 3: Mantén el ID original del producto, solo actualiza los demás campos
    return;
  }

  delete(id: number): void {
    // TODO: Eliminar un producto por su ID
    // Pista 1: Encuentra el índice del producto usando findIndex()
    // Pista 2: Si el producto existe, usa splice() para eliminarlo del array
    // Pista 3: splice(indice, 1) elimina 1 elemento en la posición 'indice'
  }
}

const products = new Products();

export default products;
