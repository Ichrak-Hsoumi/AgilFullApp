import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuichetComponent } from './view-guichet.component';

describe('ViewGuichetComponent', () => {
  let component: ViewGuichetComponent;
  let fixture: ComponentFixture<ViewGuichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuichetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
