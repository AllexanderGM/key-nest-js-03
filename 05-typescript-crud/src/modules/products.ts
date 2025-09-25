import type { Product } from "../interfaces/product";

class Products {
  private listProducts: Product[] = [];

  get(): Product[] {
    return [...this.listProducts];
  }

  getById(id: number): Product | undefined {
    if (!this.findProductIndexById(id)) return undefined;
    return this.listProducts.find((item) => item.id === id);
  }

  create(product: Product): void {
    const newProduct = {
      id: this.listProducts.length + 1, // crear un ID autoincrementable
      ...product,
    };

    this.listProducts.push(newProduct);
  }

  createListProducts(products: Product[]): void {
    this.listProducts = [...this.listProducts, ...products];
  }

  modify(id: number, product: Product): void {
    if (!this.findProductIndexById(id)) return;

    const index: number = this.extractIndexProductId(id);
    this.listProducts[index] = {
      id,
      ...product,
    };
  }

  delete(id: number): void {
    if (!this.findProductIndexById(id)) return;

    const index: number = this.extractIndexProductId(id);
    this.listProducts.splice(index, 1);
  }

  private findProductIndexById(id: number): boolean {
    const index = this.listProducts.findIndex((item) => {
      return item.id === id;
    });

    const isExists = index >= 0;

    // Validaciones
    // 1. Si no existe el producto, retornar undefined
    if (!isExists) throw new Error("Producto no encontrado");

    // 2. Si el array de productos está vacío, retornar undefined
    if (this.listProducts.length === 0) throw new Error("No hay productos disponibles");

    // 3. Si el ID es menor o igual a 0, retornar undefined
    if (id <= 0) throw new Error("ID inválido");

    return isExists;
  }

  private extractIndexProductId(id: number): number {
    const index = this.listProducts.findIndex((item) => item.id === id);
    if (index === -1) throw new Error("Producto no encontrado");
    return index;
  }
}

const products = new Products();

export default products;
