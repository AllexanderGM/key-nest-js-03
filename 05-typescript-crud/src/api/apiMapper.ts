import type { Api } from "../interfaces/api";
import mockApi from "./mockApi";
import productsApi from "./productsApi";

class ApiMapper implements Api {
  private api: Api;

  constructor() {
    // Inyección de dependencias
    this.api = mockApi;
    //this.api = productsApi;
  }

  async get() {
    return await this.api.get();
  }
}

const apiMapper = new ApiMapper();

export default apiMapper;
