import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { DataPart } from '../Component/Interface/index';

const Request: AxiosInstance = axios.create({
  baseURL: 'http://52.55.241.2:8080',
  timeout: 1000000000000000,
  headers: { 'X-Custom-Header': 'foobar', 'Access-Control-Allow-Origin': '*' },
});

export function Back(): AxiosPromise<any> {
  return Request({
    url: '/data', // Complete URL to make the API call
    method: 'get',
    responseType: 'json',
  });
}

export function DataSet(title: string, content: string, image: File | null, email: string ): AxiosPromise<any> {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('email', email);
  if (image) {
    formData.append('image', image, image.name); // Append the image with its name
  }

  return Request({
    url: '/', // Complete URL to make the API call
    method: 'post',
    responseType: 'json',
    data: formData,
  });
}
