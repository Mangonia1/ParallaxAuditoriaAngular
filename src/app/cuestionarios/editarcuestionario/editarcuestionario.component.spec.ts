import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcuestionarioComponent } from './editarcuestionario.component';

describe('EditarcuestionarioComponent', () => {
  let component: EditarcuestionarioComponent;
  let fixture: ComponentFixture<EditarcuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcuestionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
