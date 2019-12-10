import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresalistaComponent } from './empresalista.component';

describe('EmpresalistaComponent', () => {
  let component: EmpresalistaComponent;
  let fixture: ComponentFixture<EmpresalistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresalistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
