import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillistComponent } from './skillist.component';

describe('SkillistComponent', () => {
  let component: SkillistComponent;
  let fixture: ComponentFixture<SkillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
