import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontEditComponent } from './font-edit.component';

describe('FontEditComponent', () => {
  let component: FontEditComponent;
  let fixture: ComponentFixture<FontEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
