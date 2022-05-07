import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuichetComponent } from './list-guichet.component';

describe('ListGuichetComponent', () => {
  let component: ListGuichetComponent;
  let fixture: ComponentFixture<ListGuichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGuichetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
