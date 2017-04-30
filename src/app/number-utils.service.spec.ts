import { TestBed, inject } from '@angular/core/testing';

import { NumberUtilsService } from './number-utils.service';

describe('NumberUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberUtilsService]
    });
  });

  it('should ...', inject([NumberUtilsService], (service: NumberUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
