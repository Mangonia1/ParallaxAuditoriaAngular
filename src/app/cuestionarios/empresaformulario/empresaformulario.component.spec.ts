import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaformularioComponent } from './empresaformulario.component';

describe('EmpresaformularioComponent', () => {
  let component: EmpresaformularioComponent;
  let fixture: ComponentFixture<EmpresaformularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaformularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
