import { TestBed, inject } from '@angular/core/testing';

import { HttpInterceptorFakeService } from './http-interceptor-fake.service';

describe('HttpInterceptorFakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceptorFakeService]
    });
  });

  it('should ...', inject([HttpInterceptorFakeService], (service: HttpInterceptorFakeService) => {
    expect(service).toBeTruthy();
  }));
});
