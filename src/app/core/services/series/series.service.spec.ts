import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SeriesService]
    });
  });

  it('should ...', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));
});
