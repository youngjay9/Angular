import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFontComponent } from './app-font.component';

describe('AppFontComponent', () => {
  let component: AppFontComponent;
  let fixture: ComponentFixture<AppFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
