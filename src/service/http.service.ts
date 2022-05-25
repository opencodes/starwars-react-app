import axios from "axios";
import { HttpResponse } from "../interface/app.interface";

axios.interceptors.request.use(
  function (config) {
    config.headers = {
      "Content-Type": "application/json",
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
 
export const post = (url: string, payload: any) : Promise<HttpResponse>=> {
  return axios.post(url, payload)
    .then((res: any) => {
      return {
        success: true,
        message: "",
        statusCode: res.status,
        data: res.data,
      };
    })
    .catch((res: any) => {
      const response = res.response;
      return {
        success: false,
        message: response.data.error,
        statusCode: response.status,
        data: res.response.data,
      };
    });
};

export const get = (url: any): Promise<HttpResponse> => {
  return axios.get(url)
    .then((res: any) => {
      let response:HttpResponse = {
        success: true,
        message: "",
        statusCode: res.status,
        data: res.data,
      }
      return response;
    })
    .catch((res: any) => {
      const response = res.response;
      return {
        success: false,
        message: response.data.error,
        statusCode: response.status,
        data: response.data,
      };
    });
};