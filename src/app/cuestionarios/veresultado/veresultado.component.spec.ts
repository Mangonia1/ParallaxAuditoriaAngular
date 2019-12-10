import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeresultadoComponent } from './veresultado.component';

describe('VeresultadoComponent', () => {
  let component: VeresultadoComponent;
  let fixture: ComponentFixture<VeresultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeresultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeresultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
