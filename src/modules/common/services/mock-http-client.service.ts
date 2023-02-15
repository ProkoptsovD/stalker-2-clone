import axios, { Axios } from 'axios';

import { HttpClient } from './http-client.service';
import type { MockClientConfig } from '../types/http-client.type';

export class MockHttpClient extends HttpClient {
  delay: number;

  constructor(service: Axios, config?: MockClientConfig) {
    const { delay, ...restConfig } = config ?? {};
    super(service, restConfig);

    this.delay = delay ?? 1000;
  }
  get(url: string): Promise<any> {
    return this.importModuleFromMockFolder(url);
  }

  /*
   * here we can not use `${this.baseUrl}${url}` syntax
   * due to the vite's dynamic imports limitations
   * so we need maping url func
   * see more here: https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
   */
  private async importModuleFromMockFolder(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(async () => {
          const module = await import(`../../../__mocks__/${url}.mock.ts`);

          resolve(module.default);
        }, this.delay);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export const mockHttpClient = new MockHttpClient(axios, { delay: 1500 });
