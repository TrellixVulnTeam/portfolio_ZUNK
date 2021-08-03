import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfProjectComponent } from './pf-project.component';

describe('PfProjectComponent', () => {
  let component: PfProjectComponent;
  let fixture: ComponentFixture<PfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
