export type HttpClientParams = {};

export type HttpClientConfig = Partial<{
  baseUrl?: string;
}>;

export type HttpClientMethod = <T = any, R = any, D = any>(url: string, config?: D) => Promise<R>;

export type Service = {
  get: HttpClientMethod;
  post: HttpClientMethod;
  put: HttpClientMethod;
  patch: HttpClientMethod;
  delete: HttpClientMethod;
};

export type MockClientConfig = HttpClientConfig & {
  delay?: number;
};
