import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindealsComponent } from './maindeals.component';

describe('MaindealsComponent', () => {
  let component: MaindealsComponent;
  let fixture: ComponentFixture<MaindealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaindealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
