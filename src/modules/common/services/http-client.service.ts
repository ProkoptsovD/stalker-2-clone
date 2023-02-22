import axios, { Axios } from 'axios';
import type { HttpClientConfig, HttpClientParams } from '../types/http-client.type';

export class HttpClient {
  private _baseUrl: string | undefined;

  constructor(private service: Axios, private config?: HttpClientConfig) {
    const { baseUrl } = this.config ?? {};

    this._baseUrl = baseUrl;
    this.service = service;
  }

  set baseUrl(url: string) {
    this._baseUrl = url;
  }
  get baseUrl(): string {
    return this._baseUrl as string;
  }

  public get(url: string) {
    return this.service.get(this.makeFullUrl(url));
  }

  public post<A, B>(url: string, params?: HttpClientParams) {
    return this.service.post<A, B, HttpClientParams>(this.makeFullUrl(url));
  }

  public put<A, B, C>(url: string, id: string, params: HttpClientParams) {
    return this.service.put<A, B, HttpClientParams>(this.makeFullUrl(url, id));
  }

  public patch<A, B>(url: string, id: string, params: HttpClientParams) {
    return this.service.patch<A, B, HttpClientParams>(this.makeFullUrl(url, id));
  }

  public delete<A, B>(url: string, id: string, params: HttpClientParams) {
    return this.service.delete<A, B>(this.makeFullUrl(url, id), params);
  }

  private serialize<T>(condition: boolean, value: T): T | string {
    return condition ? JSON.stringify(value) : value;
  }

  private makeFullUrl(endpoint: string, param?: string): string {
    return `${this._baseUrl}/${endpoint}${param ? '/' + param : ''}`;
  }
}
