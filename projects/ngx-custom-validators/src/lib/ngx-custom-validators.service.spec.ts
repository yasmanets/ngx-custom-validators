import { TestBed } from '@angular/core/testing';

import { NgxCustomValidatorsService } from './ngx-custom-validators.service';

describe('NgxCustomValidatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCustomValidatorsService = TestBed.get(NgxCustomValidatorsService);
    expect(service).toBeTruthy();
  });
});
