import type { Product } from "../interfaces/product";
import type { Api } from "../interfaces/api";

class ProductsApi implements Api {
  private listProducts: Product[] = [];

  async get() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.ok ? await response.json() : [];

    const newProducts: Product[] = data.map((item: any) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      description: item.description,
      stock: item.rating?.count || 0,
    }));

    this.listProducts = newProducts;
    return this.listProducts;
  }
}

const productsApi = new ProductsApi();
export default productsApi;
