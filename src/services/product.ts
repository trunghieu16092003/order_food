import RestClient from "./RestClient";

export default class ProductServices {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  getProducts() {
    return this.restClient.get<{
      title: string;
    }>("https://fakestoreapi.com/products/1");
  }
}
