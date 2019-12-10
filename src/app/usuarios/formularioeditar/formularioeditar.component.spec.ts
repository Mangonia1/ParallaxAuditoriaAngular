import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioeditarComponent } from './formularioeditar.component';

describe('FormularioeditarComponent', () => {
  let component: FormularioeditarComponent;
  let fixture: ComponentFixture<FormularioeditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioeditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
