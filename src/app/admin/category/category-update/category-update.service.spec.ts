import { TestBed } from '@angular/core/testing';

import { CategoryUpdateService } from './category-update.service';

describe('CategoryUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryUpdateService = TestBed.get(CategoryUpdateService);
    expect(service).toBeTruthy();
  });
});
