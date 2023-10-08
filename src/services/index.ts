import RestClient from "./RestClient";
import ProductServices from "./product";
import UserServices from "./user";

const restClient = new RestClient();

export const productServices = new ProductServices(restClient);
export const userServices = new UserServices(restClient);
