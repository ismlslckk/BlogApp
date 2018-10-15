import { TestBed } from '@angular/core/testing';

import { CategoryAddService } from './category-add.service';

describe('CategoryAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryAddService = TestBed.get(CategoryAddService);
    expect(service).toBeTruthy();
  });
});
