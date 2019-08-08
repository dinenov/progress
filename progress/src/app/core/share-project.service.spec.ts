import { TestBed } from '@angular/core/testing';

import { ShareProjectService } from './share-project.service';

describe('ShareProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareProjectService = TestBed.get(ShareProjectService);
    expect(service).toBeTruthy();
  });
});
