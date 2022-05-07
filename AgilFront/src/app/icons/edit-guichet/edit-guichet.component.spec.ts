import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuichetComponent } from './edit-guichet.component';

describe('EditGuichetComponent', () => {
  let component: EditGuichetComponent;
  let fixture: ComponentFixture<EditGuichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGuichetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGuichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
