import type { Api } from "../interfaces/api";
import type { Product } from "../interfaces/product";

class MockApi implements Api {
  private data: Product[] = [
    { id: 1, name: "Producto 1", price: 100, stock: 10 },
    { id: 2, name: "Producto 2", price: 200, stock: 20 },
    { id: 3, name: "Producto 3", price: 300, stock: 30 },
    { id: 4, name: "Producto 4", price: 400, stock: 40 },
    { id: 5, name: "Producto 5", price: 500, stock: 50 },
    { id: 6, name: "Producto 6", price: 600, stock: 60 },
    { id: 7, name: "Producto 7", price: 700, stock: 70 },
  ];

  async get(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.data]);
      }, 1000);
    });
  }

  getById(id: number): Product | undefined {
    return this.data.find((item) => item.id === id);
  }

  post(product: Product): void {}
}

const mockApi = new MockApi();

export default mockApi;
