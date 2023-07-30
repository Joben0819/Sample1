import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { DataPart } from '../Component/Interface/index';

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

export function DataSet(name: string, content: string, image: File | null): AxiosPromise<any> {
  const formData = new FormData();
  formData.append('title', name);
  formData.append('content', content);
  if (image) {
    formData.append('image', image, image.name); // Append the image with its name
  }

  return Request({
    url: 'posts/upload', // Complete URL to make the API call
    method: 'post',
    responseType: 'json',
    data: formData,
  });
}
