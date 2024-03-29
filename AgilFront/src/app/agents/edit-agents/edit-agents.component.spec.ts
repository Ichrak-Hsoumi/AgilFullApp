import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgentsComponent } from './edit-agents.component';

describe('EditAgentsComponent', () => {
  let component: EditAgentsComponent;
  let fixture: ComponentFixture<EditAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
