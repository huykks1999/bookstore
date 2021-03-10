import { TestBed } from '@angular/core/testing';

import { TypeBookService } from './type-book.service';

describe('TypeBookService', () => {
  let service: TypeBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
