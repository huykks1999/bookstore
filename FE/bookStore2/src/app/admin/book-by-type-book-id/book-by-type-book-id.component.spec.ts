import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookByTypeBookIdComponent } from './book-by-type-book-id.component';

describe('BookByTypeBookIdComponent', () => {
  let component: BookByTypeBookIdComponent;
  let fixture: ComponentFixture<BookByTypeBookIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookByTypeBookIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookByTypeBookIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
