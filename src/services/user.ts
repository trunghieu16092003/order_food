import RestClient from "./RestClient";

export default class UserServices {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  login(email: string, password: string) {
    return this.restClient.post<{
      token: string;
    }>(`${this.restClient.config.baseURL}user/login.php`, { email, password });
  }
}
