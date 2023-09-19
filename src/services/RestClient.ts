import axios, { AxiosRequestConfig } from "axios";

const DEFAULT_CONFIG = {
  baseURL: import.meta.env.VITE_BASE_API,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
};
console.log(DEFAULT_CONFIG);

export default class RestClient {
  config: AxiosRequestConfig;
  constructor(config = {}) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };
  }

  async get<T>(url: string, params = {}, config = {}) {
    return this.request<T>(url, {
      ...config,
      params,
    });
  }
  async post<T>(url: string, data?: any, config = {}) {
    return this.request<T>(url, {
      ...config,
      data,
      method: "post",
    });
  }
  // async put() {
  //   return this.request<T>(url, {
  //     ...config,
  //     params,
  //   });
  // }
  // async delete() {
  //   return this.request<T>(url, {
  //     ...config,
  //     params,
  //   });
  // }
  // async patch() {
  //   return this.request<T>(url, {
  //     ...config,
  //     params,
  //   });
  // }

  async request<T>(url: string, config: any) {
    const token = localStorage.getItem("token");
    const auth = token && `Bearer ${token}`;
    const finalHeaderConfig = {
      ...config.headers,
      ...this.config.headers,
      authorization: auth,
    };

    const finalConfig = {
      ...this.config,
      ...config,
      url,
      headers: { ...finalHeaderConfig },
    };

    try {
      const res = await axios.request(finalConfig);
      return await Promise.resolve(res.data as T);
    } catch (err) {
      // 404 =>  404page
      /// 500 => 500page

      // 401  => logout
      // 403 => home

      return Promise.reject(err);
    }
  }
}
