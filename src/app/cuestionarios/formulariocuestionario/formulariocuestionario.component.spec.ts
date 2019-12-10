import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocuestionarioComponent } from './formulariocuestionario.component';

describe('FormulariocuestionarioComponent', () => {
  let component: FormulariocuestionarioComponent;
  let fixture: ComponentFixture<FormulariocuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariocuestionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariocuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
