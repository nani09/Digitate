import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamenComponent } from './ramen.component';

describe('RamenComponent', () => {
  let component: RamenComponent;
  let fixture: ComponentFixture<RamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
