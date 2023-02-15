import { MockHttpClient, mockHttpClient } from './mock-http-client.service';

export class MockDataService {
  constructor(private http: MockHttpClient) {}

  getEditions() {
    return this.http.get('editions');
  }

  getSystemRequirements() {
    return this.http.get('system-requirements');
  }

  getGameFeatures() {
    return this.http.get('game-features');
  }
}

export const mockDataService = new MockDataService(mockHttpClient);
