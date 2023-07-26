import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { DataPart } from '../Interface/index';

const Request: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3005',
  timeout: 1000000000000000,
  headers: { 'X-Custom-Header': 'foobar', 'Access-Control-Allow-Origin': '*' },
});

export function Back(): AxiosPromise<any> {
  return Request({
    url: '/posts', // Complete URL to make the API call
    method: 'get',
    responseType: 'json',
  });
}

export function DataSet(id: number ,name: string, content: string): AxiosPromise<any> {
    var data: DataPart = {
        id: id,
        title: name,
        content: content,
        createdAt: "2023-07-23T09:28:16",
        updatedAt: "2023-07-23T09:28:16.0"
    }
    
    return Request({
      url: '/posts', // Complete URL to make the API call
      method: 'post',
      responseType: 'json',
      data
    });
}