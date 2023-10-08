import RestClient from "./RestClient";

export default class ProductServices {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  getProducts() {
    return this.restClient.get<any[]>(
      `${this.restClient.config.baseURL}product/get_all_product.php`
    );
  }
}
