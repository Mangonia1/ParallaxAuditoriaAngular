import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacuestionarioComponent } from './listacuestionario.component';

describe('ListacuestionarioComponent', () => {
  let component: ListacuestionarioComponent;
  let fixture: ComponentFixture<ListacuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacuestionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
