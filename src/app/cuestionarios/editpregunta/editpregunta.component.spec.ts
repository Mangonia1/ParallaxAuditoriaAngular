import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpreguntaComponent } from './editpregunta.component';

describe('EditpreguntaComponent', () => {
  let component: EditpreguntaComponent;
  let fixture: ComponentFixture<EditpreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
